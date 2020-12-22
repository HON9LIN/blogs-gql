import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Author } from './models/author.model';
import { AuthorsService } from './authors.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
  ) {
  }

  @Query(returns => Author)
  author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findById(id);
  }

  @Mutation(returns => Author)
  createUser(@Args('CreateUserInput') mutationArgs: CreateUserDto): Promise<Author> {
    return this.authorsService.addAuthor(mutationArgs);
  }
}
