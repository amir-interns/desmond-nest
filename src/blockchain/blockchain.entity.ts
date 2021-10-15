
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BalanceRequest {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  ip: string;

  @Column()
  address: string;

  @Column()
  type: string;

  @Column({type: 'jsonb',
           default: () => "'[]'"})
  result: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
