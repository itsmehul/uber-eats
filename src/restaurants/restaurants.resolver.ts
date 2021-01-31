import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { RestaurantService } from './restaurants.service';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(() => Boolean)
  createRestaurant(
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): boolean {
    try {
      this.restaurantService.create(createRestaurantDto);
      return true;
    } catch (error) {
      return false;
    }
  }

  @Mutation(() => Boolean)
  updateRestaurant(
    @Args('input') updateRestaurantDto: UpdateRestaurantDto,
  ): boolean {
    try {
      this.restaurantService.update(updateRestaurantDto);
      return true;
    } catch (error) {
      return false;
    }
  }

  @Mutation(() => Boolean)
  deleteRestaurant(@Args('id') id: number): boolean {
    try {
      this.restaurantService.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  @Query(() => Restaurant)
  retaurant(@Args('id') id: number): Promise<Restaurant> {
    return this.restaurantService.get(id);
  }
}
