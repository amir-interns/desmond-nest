import { BalanceRequest } from './blockchain.entity';
import { Connection, Repository } from 'typeorm';
import { CreateBalanceRequestDto } from './dto/create-balance-request.dto';
export declare class BlockchainService {
    private connection;
    private balanceRequestRepository;
    constructor(connection: Connection, balanceRequestRepository: Repository<BalanceRequest>);
    findOne(id: string): Promise<BalanceRequest>;
    create(createBalanceRequest: CreateBalanceRequestDto): Promise<BalanceRequest>;
    findAll(): Promise<BalanceRequest[]>;
}
