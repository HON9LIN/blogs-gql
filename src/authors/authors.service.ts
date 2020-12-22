import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Author } from './models/author.model';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class AuthorsService {
  constructor(@InjectRepository(Author) private authorsRepository: Repository<Author>) {
  }

  findById(id: number): Promise<Author> {
    return this.authorsRepository.findOne({ id });
  }

  addAuthor(dto: CreateUserDto): Promise<Author> {
    const author = new Author();
    author.firstName = dto.firstName;
    author.lastName = dto.lastName;
    author.posts = [];
    return this.authorsRepository.save(author);
  }
}
