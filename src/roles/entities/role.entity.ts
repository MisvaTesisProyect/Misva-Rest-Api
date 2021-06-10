import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from 'src/users/entities/user.entity'
@Entity()
export class Role {
    @IsNumber()
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @Column()
    description: string

    @IsBoolean()
    @Column({default:true})
    to_read: boolean

    @IsBoolean()
    @Column({default:false})
    to_update: boolean

    @IsBoolean()
    @Column({default:false})
    to_create: boolean

    @IsBoolean()
    @Column({default:false})
    to_delete: boolean

    @IsDate()
    @CreateDateColumn()
    created_at: Date
    
    @IsDate()
    @UpdateDateColumn()
    update_at: Date

    @OneToMany(()=>User, user => user.id_rol)
    user: User[]

}
