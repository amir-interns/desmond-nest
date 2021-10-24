import { Injectable } from "@nestjs/common";
const axios = require("axios")
const sochain_network = "BTCTEST"
@Injectable()
export class BitcoinService {
  sayHello() {
    return 'btc'
  }

   checkTx(txHash: string): Promise<object> {
    return axios.get(`https://sochain.com/api/v2/tx/${sochain_network}/${txHash}`).then(function(res)  { return res.data })
  }

    getBalance(address: string): Promise<object> {
        return axios.get(`https://sochain.com/api/v2/get_address_balance/${sochain_network}/${address}`).then(function(res)  { return res.data.data.confirmed_balance })
    }

        async sendTx(body) { //(recieverAddress, amountToSend)
          const axios = require("axios")
          const bitcore = require("bitcore-lib")
          const sochain_network = "BTCTEST"
          const privateKey = "92mmY2TTydkHmGpcAWCmqEZjMwxN23TxHgq9HVzSrXxNa17zTWF"
          const sourceAddress = "n3bduR9Y27yZsfCMFyPJokVhe9KPdd6bEu"

        let amountToSend = 0;
        let mass = [];
        for (let i of body) {
          //console.log(i.value)
          amountToSend = amountToSend + parseFloat(i.value);
        };
        
        const satoshiToSend = amountToSend * 100000000; //*
        let fee = 0;
        let inputCount = 0;
        let outputCount = 1;
        for (let i of body) {
          outputCount++;
        };
        if (outputCount > 50) {
          throw new Error("Too much transactions. Max 50.");
        }
        const utxos = await axios.get(
            `https://sochain.com/api/v2/get_tx_unspent/${sochain_network}/${sourceAddress}`
        );
        const transaction = new bitcore.Transaction();
        let totalAmountAvailable = 0;
      
        let inputs = [];
        utxos.data.data.txs.forEach(async (element) => {
          let utxo: any = {};
          utxo.satoshis = Math.floor(Number(element.value) * 100000000);
          utxo.script = element.script_hex;
          utxo.address = utxos.data.data.address;
          utxo.txId = element.txid;
          utxo.outputIndex = element.output_no;
          totalAmountAvailable += utxo.satoshis;
          inputCount += 1;
          inputs.push(utxo);
        });
      
        const transactionSize = inputCount * 146 + outputCount * 34 + 10 - inputCount;
        // Check if we have enough funds to cover the transaction and the fees assuming we want to pay 20 satoshis per byte
      
        fee = transactionSize;
        if (totalAmountAvailable - satoshiToSend - fee  < 0) {
          throw new Error("Balance is too low for this transaction");
        }
      
        //Set transaction input
        transaction.from(inputs);
      
        // set the recieving address and the amount to send
        for (let i of body) {
      
          if (totalAmountAvailable - transaction.outputAmount - fee - (parseFloat(i.value)*100000000)  < 0) {
            break;
          }
          transaction.to(i.to, parseFloat(i.value)*100000000);
      
          mass.push({
            to: i.to,
            value: i.value,
            transactionHash: ""
          });
          //mass2.push(i.value);
        }
      
        //transaction.to(recieverAddress, satoshiToSend);
      
        // Set change address - Address to receive the left over funds after transfer
        transaction.change(sourceAddress);
      
        //manually set transaction fees: 20 satoshis per byte
        transaction.fee(fee * 10);
      
        // Sign transaction with your private key
        transaction.sign(privateKey);
      
        // serialize Transactions
        const serializedTX = transaction.serialize();
        // Send transaction
        const result = await axios({
          method: "POST",
          url: `https://sochain.com/api/v2/send_tx/${sochain_network}`,
          data: {
            tx_hex: serializedTX,
          },
        })
        
          mass.forEach( element => {
            element.transactionHash = result.data.data.txid
            }
          )
        
      
        const responseData = {
          status: result.data.status,
          transfers: mass
        };
        return responseData;
      };

}



  
