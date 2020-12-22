import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Post } from '../../posts/models/post.model';

@Entity('author')
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field({ nullable: true })
  firstName?: string;

  @Column()
  @Field({ nullable: true })
  lastName?: string;

  @OneToMany(() => Post, post => post.author)
  @Field(type => [Post])
  posts: Post[];
}
