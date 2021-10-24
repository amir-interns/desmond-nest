import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlockchainEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  txHash: string;

  @Column()
  status: string;

  @Column({type: 'jsonb',
           default: () => "'[]'"})
  result: string;

  @Column()
  typeCoin: string;

  @Column()
  date: Date;

}