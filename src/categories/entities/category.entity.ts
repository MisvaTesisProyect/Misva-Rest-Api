import { IsBoolean, isBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {

    @IsNumber()
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    name: string

    @IsNumber()
    @ManyToOne(type => Category, category => category.id, {
        onDelete: 'SET NULL'
    })
    @JoinColumn({name: 'id_parent'})
    id_parent: number | Category

    @IsString()
    @Column({length:2000})
    description: string

    @IsString()
    @Column()
    image: string

    @IsBoolean()
    @Column({default:true})
    active: boolean

    @IsBoolean()
    @Column({default:false})
    delete: boolean

    @IsDate()
    @CreateDateColumn()
    created_at: Date

    @IsDate()
    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Category, category => category.id_parent, { cascade: true })
    parent: Category[]
}
