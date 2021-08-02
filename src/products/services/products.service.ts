import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { ProductFilterDto } from 'src/Interface/search';
import { getRepository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  //!IMPORTANT:
  //TODO: cuando se agergue las nuevas relaciones, agregarlas a las query
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
  async findAll(options: IPaginationOptions, filter: ProductFilterDto): Promise<Product[] | any> {
    try {
      let query = getRepository(Product)
        .createQueryBuilder("product")
        .leftJoinAndSelect("product.id_manufacturer", "manufacturer", "manufacturer.id = product.id_manufacturer")
        .leftJoinAndSelect("product.id_category", "category", "category.id = product.id_category")
      filter.name != null ? query.where("product.name like :filter", { filter: `%${filter.name}%` }) : query
      filter.description != null ? query.where("product.description like :filter", { filter: `%${filter.description}%` }) : query
      filter.reference != null ? query.where("product.reference like :filter", { filter: `%${filter.reference}%` }) : query
      filter.price_from != null ? query.where("product.price >= :filter", { filter: filter.price_from }) : query
      filter.price_to != null ? query.where("product.price <= :filter", { filter: filter.price_to }) : query
      filter.active != null ? query.where("product.active = :filter", { filter: filter.active }) : query
      filter.delete != null ? query.where("product.delete = :filter", { filter: filter.delete }) : query
      filter.id_category != null ? query.where("product.id_category = :filter", { filter: filter.id_category }) : query
      query.orderBy("product.created_at", "DESC")
      return await paginate<Product>(query, options)
    } catch (error) {
      return error
    }
  }


  async search(options: IPaginationOptions, word: any): Promise<Product[] | any> {
    const { search } = word
    try {
      let query = getRepository(Product)
        .createQueryBuilder("product")
        .leftJoinAndSelect("product.id_manufacturer", "manufacturer", "manufacturer.id = product.id_manufacturer")
        .leftJoinAndSelect("product.id_category", 'category', "category.id = product.id_category")
        .where("product.name like :word", { word: `%${search}%` })
        .orWhere("product.reference like :word", { word: `%${search}%` })
        .orWhere("category.name like :word", { word: `%${search}%` })

      return await paginate<Product>(query, options)
    } catch (error) {

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
  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
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
        .where("id = :id", { id: id })
        .execute()
    } catch (error) {
      return error
    }
  }
}
