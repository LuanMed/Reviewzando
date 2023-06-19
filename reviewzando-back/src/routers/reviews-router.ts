import { createReview, deleteReview, getReviews, getReviewsById } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { reviewSchema } from '@/schemas';
import { Router } from 'express';

const reviewRouter = Router();

reviewRouter
  .all('/*', authenticateToken)
  .get('/', getReviews)
  .get('/:id', getReviewsById)
  .post('/', validateBody(reviewSchema), createReview)
  .delete('/:id', deleteReview);

export { reviewRouter };
