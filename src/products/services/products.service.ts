import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  
  /**
   * 
   * @param createProductDto body product
   * @returns product created
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      return await getRepository(Product).save(createProductDto)
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @returns Products
   */
  async findAll(): Promise<Product[]> {
    try {
      return await getRepository(Product)
        .find(
          {
            where: {
              active: true
            },
            relations: [
              'category',
              'manufacturer',
            ]
          })
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @param id int
   * @returns one product
   */
  async findOne(id: number): Promise<Product[]> {
    try {
      return await getRepository(Product)
        .find({
          where: { id: id },
          relations: [
            'category',
            'manufacturer'
          ]
        })
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @param id int
   * @param updateProductDto body product update
   * @returns status
   */
  async update(id: number, updateProductDto: UpdateProductDto):Promise<any> {
    try {
      return await getRepository(Product)
        .createQueryBuilder('product')
        .update(updateProductDto)
        .where("id = :id", { id: id })
        .execute()
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @param id int
   * @returns status
   */
  async remove(id: number): Promise<any> {
    try {
      return await getRepository(Product)
        .createQueryBuilder()
        .delete()      
        .from(Product)
        .where("id = :id", {id : id})
        .execute()
    } catch (error) {
      return error
    }
  }
}
