import { IsBoolean, IsDate, IsEmail, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, UpdateDateColumn, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import  {Role} from 'src/roles/entities/role.entity'
@Entity()
export class User{
    @IsNumber()
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @Column()
    name: string

    @IsString()
    @Column()
    last_name: string

    @IsEmail()
    @Column()
    email: string

    @IsString()
    @Column()
    password: string

    @IsBoolean()
    @Column({default:true})
    active: boolean

    @IsString()
    @Column()
    reset_password_token: string

    @OneToOne(() => Role, role => role.id)
    @JoinColumn({name:"role"})
    id_rol: Role | number

    @IsDate()
    @CreateDateColumn()
    created_at: Date

    @IsDate()
    @UpdateDateColumn()
    update_at: Date

}
