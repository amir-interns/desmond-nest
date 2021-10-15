import { Module } from '@nestjs/common';
import { EtheriumService } from './etherium.service';

@Module({
    providers: [EtheriumService],
    exports: [EtheriumService]
})
export class EtheriumModule {}
