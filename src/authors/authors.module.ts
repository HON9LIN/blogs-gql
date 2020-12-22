import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Author } from './models/author.model';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
  ],
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {
}
