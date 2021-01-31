import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsOptional, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}

// @ArgsType()
// export class CreateRestaurantDto {
//   @Field(() => String)
//   @IsString()
//   @Length(5, 10)
//   name: string;

//   @Field(() => String)
//   @IsString()
//   ownerName: string;

//   @Field(() => String, { nullable: true })
//   @IsString()
//   @IsOptional()
//   deliveryAgency?: string;
// }
