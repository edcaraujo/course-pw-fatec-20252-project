import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { hash } from 'bcrypt';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password,10);
    }
}

export default User;