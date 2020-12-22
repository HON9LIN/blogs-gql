import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Author } from '../../authors/models/author.model';

@Entity('post')
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field(type => Int, { nullable: true })
  votes?: number;

  @ManyToOne(() => Author, author => author.posts)
  author: Author;
}
