import faker from 'faker';
import { Post } from '../Reducer';

function randomPost(): Post {
  const post: Post = {
    id: faker.random.number(),
    body: faker.lorem.paragraph(),
    title: faker.lorem.sentence(),
    userId: faker.random.number(),
  };

  return post;
}

export function randomPosts(max = 10): Post[] {
  const posts: Post[] = []
  const numberOfPosts = faker.random.number(max)
  for (let i = 0; i < numberOfPosts; i += 1) {
    posts.push(randomPost())
  }

  return posts
}

export default randomPost;
