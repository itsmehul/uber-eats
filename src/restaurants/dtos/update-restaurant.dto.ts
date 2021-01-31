import { CreateRestaurantDto } from './create-restaurant.dto';
import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class UpdateRestaurantInputType extends PartialType(
  CreateRestaurantDto,
) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
