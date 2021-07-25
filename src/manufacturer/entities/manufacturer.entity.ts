import { IsBoolean, IsDate, IsNumber, IsString, MaxLength } from "class-validator";
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Manufacturer {
    @IsNumber()
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @MaxLength(25)
    @Column({length:25, nullable: false})
    name: string

    @IsString()
    @MaxLength(200)
    @Column({length:200})
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

    @OneToMany(()=>Product, product => product.id_manufacturer)
    product: Product[]
}
