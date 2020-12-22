import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { Post } from './models/post.model';
import { PostsService } from './posts.service';
import { AuthorsService } from '../authors/authors.service';

const pubSub = new PubSub();

@Resolver(of => Post)
export class AuthorsResolver {
  constructor(
    private postsService: PostsService,
    private authorsService: AuthorsService,
  ) {
  }

  @Query(returns => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findById(id);
  }

  @Mutation(returns => Post)
  async createPost(@Args('title', { type: () => String }) title: string, @Args('authorId', { type: () => Int }) authorId: number): Promise<Post> {
    const author = await this.authorsService.findById(authorId);
    return this.postsService.createPost(title, author).then(post => {
      pubSub.publish('postAdded', { postAdded: post });
      return post;
    });
  }

  @Subscription(returns => Post, {
    name: 'postAdded',
  })
  addPostHandler() {
    return pubSub.asyncIterator('postAdded');
  }
}
