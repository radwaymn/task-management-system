import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('status')
export class StatusEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
		type: 'enum',
		enum: ['pending', 'completed'],
		default: 'pending'
	})
	title: string;

    
}