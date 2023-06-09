import { ReviewWithoutAverage } from '@/protocols';
import reviewRepository from '@/repositories/reviews-repository';
import { Prisma, Review } from '@prisma/client';

async function createReview(body: ReviewWithoutAverage): Promise<Review> {
  const { userId, title, poster, plotScore, flowScore, outcomeScore, description } = body;
  const average = (plotScore + flowScore + outcomeScore) / 3;

  return await reviewRepository.createReview({
    userId,
    title,
    poster,
    plotScore,
    flowScore,
    outcomeScore,
    average,
    description,
  });
}

const reviewService = {
  createReview,
};

export default reviewService;
