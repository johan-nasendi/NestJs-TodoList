import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TodoList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    desc: string;

    @Column()
    isPublik: boolean;
}