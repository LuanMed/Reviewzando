import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function createReview(data: Prisma.ReviewUncheckedCreateInput) {
  console.log(data);
  return prisma.review.create({
    data,
  });
}

const reviewRepository = {
  createReview,
};

export default reviewRepository;
