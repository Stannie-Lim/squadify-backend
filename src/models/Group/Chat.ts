import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Group } from './Group'
import { Message } from './Message';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Group, group => group.chat)
  group: Group;

  @OneToMany(() => Message, message => message.chat)
  messages: Message[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}