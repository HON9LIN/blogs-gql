import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from './models/post.model';
import { Author } from '../authors/models/author.model';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {
  }

  findById(id: number): Promise<Post> {
    return this.postsRepository.findOne({ id });
  }

  createPost(title: string, author: Author): Promise<Post> {
    const post = new Post();
    post.author = author;
    post.title = title;
    post.votes = 0;
    return this.postsRepository.save(post);
  }
}
