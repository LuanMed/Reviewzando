import { createReview, getReviews } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { reviewSchema } from '@/schemas';
import { Router } from 'express';

const reviewRouter = Router();

reviewRouter.all('/*', authenticateToken).get('/', getReviews).post('/', validateBody(reviewSchema), createReview);

export { reviewRouter };
