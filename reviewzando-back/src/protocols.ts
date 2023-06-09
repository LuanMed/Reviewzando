import { Follow, Review, User } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type ReviewWithoutAverage = Omit<Review, 'id' | 'average'>;

export type ReviewBody = Omit<ReviewWithoutAverage, 'userId'>;

export type FindUser = Pick<User, 'id' | 'picture_url' | 'username'>;

export type FollowBody = Pick<Follow, 'followingId'>;
