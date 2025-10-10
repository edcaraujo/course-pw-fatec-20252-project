import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    constructor(code: string, name: string) {
        this.name = name;
        this.code = code;
    }
}

export default Patient;