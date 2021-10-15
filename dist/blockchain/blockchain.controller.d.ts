import { BitcoinService } from 'src/bitcoin/bitcoin.service';
import { EtheriumService } from 'src/etherium/etherium.service';
import { BalanceRequest } from './blockchain.entity';
import { BlockchainService } from './blockchain.service';
import { CreateBalanceRequestDto } from './dto/create-balance-request.dto';
import { Repository } from 'typeorm';
export declare class BlockchainController {
    private bitcoinService;
    private etheriumService;
    private blockchainService;
    private balanceRequestRepository;
    constructor(bitcoinService: BitcoinService, etheriumService: EtheriumService, blockchainService: BlockchainService, balanceRequestRepository: Repository<BalanceRequest>);
    getCoins(params: any, ip: string): Promise<object>;
    getIp(ip: string): string;
    create(createBalanceRequestDto: CreateBalanceRequestDto): Promise<BalanceRequest>;
    findAll(): Promise<BalanceRequest[]>;
}
