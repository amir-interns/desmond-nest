import { Controller, Get, Param, Post, Body} from '@nestjs/common';
import { BitcoinService } from 'src/bitcoin/bitcoin.service';
import { EtheriumService } from 'src/etherium/etherium.service';
import { BalanceRequest } from './blockchain.entity';
import { BlockchainService } from './blockchain.service';
import { CreateBalanceRequestDto } from './dto/create-balance-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealIP } from 'nestjs-real-ip'





@Controller('blockchain')
export class BlockchainController {
    
    constructor(private bitcoinService: BitcoinService, private etheriumService: EtheriumService, private blockchainService: BlockchainService, 
        @InjectRepository(BalanceRequest)
        private balanceRequestRepository: Repository<BalanceRequest>) {}
    
    @Get(':type/balance/:address')
    async getCoins(@Param() params, @RealIP() ip: string): Promise<object> {
        let balance
        let btcBalance
        let res
        if ( params.type === 'eth' ) {
            balance = this.etheriumService.getBalance(params.address)
            res = {
                type: params.type,
                address: params.address,
                balance: await balance
            }
        } 

        if ( params.type === 'btc' ) {
             balance = this.bitcoinService.getBalance(params.address)
             res = {
                type: params.type,
                address: params.address,
                balance: await balance
            }
        }
        
        const BalanceRequestObj = {
            id: 2,
            ip: ip,
            address: params.address,
            type: params.type,
            result: await balance,
            createdAt: new Date(),
            updatedAt: new Date()
          }

        this.create(BalanceRequestObj)
  

        return res
    }

    getIp(@RealIP() ip: string): string {
        return ip;
      }
    
    create(@Body() createBalanceRequestDto: CreateBalanceRequestDto): Promise<BalanceRequest> {
        return this.blockchainService.create(createBalanceRequestDto);
    }

    @Get('findAll')
    async findAll(): Promise<BalanceRequest[]> {
        return this.blockchainService.findAll();
      }
}
