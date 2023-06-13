import { prisma } from '@/config';
import { Prisma, Review } from '@prisma/client';

async function getReviews(): Promise<Review[]> {
  return prisma.review.findMany({
    include: {
      User: {
        select: {
          username: true,
          picture_url: true,
        },
      },
    },
    orderBy: {
      id: 'desc',
    },
  });
}

async function getReviewsById(id: number): Promise<Review[]> {
  return prisma.review.findMany({
    include: {
      User: {
        select: {
          username: true,
          picture_url: true,
        },
      },
    },
    where: {
      userId: id,
    },
    orderBy: {
      id: 'desc',
    },
  });
}

async function createReview(data: Prisma.ReviewUncheckedCreateInput): Promise<Review> {
  return prisma.review.create({
    data,
  });
}

const reviewRepository = {
  getReviews,
  getReviewsById,
  createReview,
};

export default reviewRepository;
