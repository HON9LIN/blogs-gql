import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateUserInput')
export class CreateUserDto {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
