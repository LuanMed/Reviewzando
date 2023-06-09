import { Review } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type ReviewWithoutAverage = Omit<Review, 'id' | 'average'>;

export type ReviewBody = Omit<ReviewWithoutAverage, 'userId'>;
