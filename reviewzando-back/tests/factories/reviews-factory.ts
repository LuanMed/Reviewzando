import { faker } from '@faker-js/faker';
import { Review } from '@prisma/client';
import { prisma } from '@/config';

export async function createReview(userId: number): Promise<Review> {
  return prisma.review.create({
    data: {
      title: faker.lorem.sentence(),
      poster: faker.internet.url(),
      plotScore: faker.number.float(),
      outcomeScore: faker.number.float(),
      flowScore: faker.number.float(),
      average: faker.number.float(),
      description: faker.lorem.sentence(),
      userId,
    },
  });
}
