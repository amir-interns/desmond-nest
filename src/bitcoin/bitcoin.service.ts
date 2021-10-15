import { Injectable } from '@nestjs/common';
const axios = require("axios");
const sochain_network = "BTCTEST";


@Injectable()
export class BitcoinService {

     getBalance(address: string): Promise<object> {
        
        return axios.get(`https://sochain.com/api/v2/get_address_balance/${sochain_network}/${address}`).then(function(res)  { return res.data.data.confirmed_balance })

    }
}
