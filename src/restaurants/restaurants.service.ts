import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}

  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const newRestaurant = this.restaurants.create(createRestaurantDto);
    return this.restaurants.save(newRestaurant);
  }

  update({ id, data }: UpdateRestaurantDto): Promise<UpdateResult> {
    return this.restaurants.update(id, { ...data });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.restaurants.delete(id);
  }

  get(id: number): Promise<Restaurant> {
    return this.restaurants.findOne(id);
  }
}
