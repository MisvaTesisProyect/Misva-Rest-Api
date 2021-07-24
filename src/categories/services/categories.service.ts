import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../entities/category.entity';
import { paginate,paginateRaw,Pagination,IPaginationOptions,} from 'nestjs-typeorm-paginate'
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CategoriesService {

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      return await  getRepository(Category).save(createCategoryDto)
    } catch (error) {
      return error
    }
  }
  async findCategoryByPaginations(options:IPaginationOptions): Promise<Pagination<Category>|any>{
    return await paginate<Category>(
      getRepository(Category), 
      options, 
      {relations:['parent']}
    )
  }
  async findAll(): Promise<Category | any> {
    try {
      return await  getRepository(Category)
                      .find({ relations: ['parent'] })
                      .then(res =>{return res})
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @param id int id categoria a buscar
   * @returns 
   */
  async findOne(id: number): Promise<Category | any> {
    try {
      return await  getRepository(Category)
                      .find({where:{id:id}, relations:['parent']})
                      .then(res => {return res})

    } catch (error) {
      
    }
  }

  /**
   * 
   * @param id int id de la categoria
   * @param updateCategoryDto Categoy datos a actualizar  
   * @returns 
   */
  async update(id: number, updateCategoryDto: UpdateCategoryDto):Promise<Category|any> {
       try {
        return await getRepository(Category)
          .createQueryBuilder("category")
          .update(updateCategoryDto)
          .where("id= :id",{id:id})
          .execute()
       } catch (error) {
         return error
       }
  }

  /**
  * @param id int id de la categoria a eliminar
   */
  async remove(id: number):Promise<Category|any> {
   try {
    return await getRepository(Category)
    .createQueryBuilder()
    .delete()
    .from(Category)
    .where("id=:id",{id:id})
    .execute()
   } catch (error) {
     return error
   }
  }
}
