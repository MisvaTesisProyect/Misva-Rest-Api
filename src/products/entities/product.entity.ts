import { IsBoolean, IsDate, IsDecimal, IsNumber, IsString, MaxLength, maxLength } from "class-validator";
import { Category } from "src/categories/entities/category.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['reference'])
export class Product {
    @IsNumber()
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @MaxLength(50)
    @Column({length:50})
    name: string

    @IsString()
    @MaxLength(2000)
    @Column({length: 2000})
    description: string

    @IsString()
    @MaxLength(25)
    @Column({length:25})
    reference: string

    @IsNumber()
    @OneToMany(()=> Category, category => category.id)
    @JoinColumn({name: 'id_category'})
    id_category: number

    @IsDecimal()
    @MaxLength(10.2)
    @Column({length: 10.2})
    price: number

    @IsNumber()
    @Column({default: 1})
    minimal_quantity: number

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
}
