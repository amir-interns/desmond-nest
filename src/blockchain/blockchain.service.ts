import { Get, Injectable, Optional } from '@nestjs/common';
import { BalanceRequest } from './blockchain.entity';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBalanceRequestDto } from './dto/create-balance-request.dto';

@Injectable()
export class BlockchainService {
    
    constructor(private connection: Connection,
                @InjectRepository(BalanceRequest)
                private balanceRequestRepository: Repository<BalanceRequest>) 
                {}

                    
                findOne(id: string): Promise<BalanceRequest> {
                    return this.balanceRequestRepository.findOne(id);
                  }
                  create(createBalanceRequest: CreateBalanceRequestDto): Promise<BalanceRequest> {
                    const balanceRequest = new BalanceRequest();
                    //balanceRequest.id = createBalanceRequest.id;
                    balanceRequest.ip = createBalanceRequest.ip;
                    balanceRequest.address = createBalanceRequest.address;
                    balanceRequest.type = createBalanceRequest.type;
                    balanceRequest.result = createBalanceRequest.result;
                    balanceRequest.createdAt = createBalanceRequest.createdAt;
                    balanceRequest.updatedAt = createBalanceRequest.updatedAt;
                
                    return this.balanceRequestRepository.save(balanceRequest);
                  }

                  async findAll(): Promise<BalanceRequest[]> {
                    return this.balanceRequestRepository.find();
                  }

                  

}