import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { EtheriumModule } from './etherium/etherium.module';
import { BitcoinModule } from './bitcoin/bitcoin.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BalanceRequest } from './blockchain/blockchain.entity';

@Module({
  imports: [BlockchainModule,
           EtheriumModule, 
           BitcoinModule, 
           TypeOrmModule.forRoot({
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "postgres",
            "password": "postgres",
            "database": "test",
            "entities": [BalanceRequest],
            "synchronize": true
            }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
