import { Injectable } from '@nestjs/common';
import { paginate, IPaginationOptions, } from 'nestjs-typeorm-paginate'
import { getRepository } from 'typeorm';
import { CreateManufacturerDto } from '../dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from '../dto/update-manufacturer.dto';
import { Manufacturer } from '../entities/manufacturer.entity';

@Injectable()
export class ManufacturerService {

  /**
   * 
   * @param createManufacturerDto Manufacturer body
   * @returns new manufacturer
   */
  async create(createManufacturerDto: CreateManufacturerDto): Promise<Manufacturer> {
    try {
      return await getRepository(Manufacturer)
        .save(createManufacturerDto)
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @returns Manufacturer array
   */
  async findAll(): Promise<Manufacturer[]> {
    try {
      return await getRepository(Manufacturer).find().then(res => { return res })
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @param options params
   * @returns items paginados
   */
  async manufacturerPaginate(options: IPaginationOptions): Promise<Manufacturer[] | any> {
    try {
      return await paginate<Manufacturer>(
        getRepository(Manufacturer),
        options
      )
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @param id int 
   * @returns Manufacturer array
   */
  async findOne(id: number): Promise<Manufacturer[]> {
    try {
      return await getRepository(Manufacturer)
        .find({ where: { id: id } })
        .then(res => { return res })
    } catch (error) {
      return error
    }
  }

  /**
   * 
   * @param id int
   * @param updateManufacturerDto Manufacturer body
   * @returns status
   */
  async update(id: number, updateManufacturerDto: UpdateManufacturerDto): Promise<Manufacturer[] | any> {
    try {
      return await getRepository(Manufacturer)
        .createQueryBuilder("manufacturer")
        .update(updateManufacturerDto)
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
  async remove(id: number): Promise<Manufacturer[] | any> {
    try {
      return await getRepository(Manufacturer)
        .createQueryBuilder()
        .delete()
        .from(Manufacturer)
        .where("id=:id", { id: id })
        .execute()
    } catch (error) {
      return error
    }
  }
}
