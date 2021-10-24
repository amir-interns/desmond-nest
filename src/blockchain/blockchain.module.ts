import { Module, forwardRef } from '@nestjs/common';
import { BitcoinService } from './bitcoin.service';
import { BlockchainController } from './blockchain.controller';
import { EtheriumService } from './etherium.service';
import { BlockchainService } from './blockchain.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainEntity } from './blockchain.entity';

@Module({
    imports: [TypeOrmModule.forFeature( [ BlockchainEntity ])],
    providers: [ BitcoinService, EtheriumService, BlockchainService ],
    controllers: [BlockchainController],
})
export class BlockchainModule {
    

}
