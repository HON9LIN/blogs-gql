import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './models/post.model';

@Module({
  imports: [TypeOrmModule.forFeature([Post])]
})
export class PostsModule {}
