import { Module } from '@nestjs/common';
import { BlockchainController } from './blockchain.controller';
import { BitcoinModule } from 'src/bitcoin/bitcoin.module';
import { EtheriumModule } from 'src/etherium/etherium.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceRequest } from './blockchain.entity';
import { BlockchainService } from './blockchain.service';


@Module({
    providers: [BlockchainService],
    controllers: [BlockchainController],
    imports: [BitcoinModule, EtheriumModule, TypeOrmModule.forFeature([BalanceRequest])]
})
export class BlockchainModule {}
