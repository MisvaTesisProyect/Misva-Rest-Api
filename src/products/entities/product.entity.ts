import { IsBoolean, IsDate, IsDecimal, IsNumber, IsString, MaxLength, maxLength } from "class-validator";
import { Category } from "src/categories/entities/category.entity";
import { Manufacturer } from "src/manufacturer/entities/manufacturer.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['reference'])
export class Product {
    @IsNumber()
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @MaxLength(50)
    @Column({ length: 50 })
    name: string

    @IsString()
    @MaxLength(2000)
    @Column({ length: 2000 })
    description: string

    @IsString()
    @MaxLength(25)
    @Column({ length: 25 })
    reference: string

    /**
     * Categoria
     */
    // @Column()
    @ManyToOne(() => Category, category => category.id)
    @JoinColumn({ name: 'id_category' })
    id_category: Category | number

    /** 
     * Marca
     */
    @ManyToOne(() => Manufacturer, manufacturer => manufacturer.id)
    @JoinColumn({ name: 'id_manufacturer' })
    id_manufacturer: Manufacturer | number

    @IsDecimal()
    @MaxLength(10.2)
    @Column()
    price: number

    @IsNumber()
    @Column({ default: 1 })
    minimal_quantity: number

    @IsBoolean()
    @Column({ default: true })
    active: boolean

    @IsBoolean()
    @Column({ default: false })
    delete: boolean

    @IsDate()
    @CreateDateColumn()
    created_at: Date

    @IsDate()
    @UpdateDateColumn()
    updated_at: Date
}
