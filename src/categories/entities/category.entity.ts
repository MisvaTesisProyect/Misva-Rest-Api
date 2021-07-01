import { IsBoolean, isBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { Product } from "src/products/entities/product.entity";
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
    },)
    @JoinColumn({name: 'id_parent'})
    @Column({default:0})
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

    /**
     * Creo una relacion Categoria (id) -> Categoria(id_parent)
     */
    @OneToMany(() => Category, category => category.id_parent, { cascade: true })
    parent: Category[]

    /**
     * Creo una relacion entre Categorias (id) y Productos (id_categoria)
     */
    @OneToMany(()=> Product, product => product.id_category, {onDelete: 'SET NULL'})
    product: Product[]
}
