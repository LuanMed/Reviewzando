import { notFoundError } from '@/errors';
import { ReviewWithoutAverage } from '@/protocols';
import reviewRepository from '@/repositories/reviews-repository';
import { Review } from '@prisma/client';

async function getReviews(id: number): Promise<Review[]> {
  const reviews: Review[] = await reviewRepository.getReviews(id);
  if (!reviews) throw notFoundError();

  return reviews;
}

async function getReviewsById(id: number): Promise<Review[]> {
  const reviews: Review[] = await reviewRepository.getReviewsById(id);
  if (!reviews) throw notFoundError();

  return reviews;
}

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
  getReviews,
  getReviewsById,
  createReview,
};

export default reviewService;
