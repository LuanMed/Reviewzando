import { AuthenticatedRequest } from '@/middlewares/authentication-middleware';
import { ReviewBody } from '@/protocols';
import reviewService from '@/services/reviews-service';
import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';

export async function getReviews(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  try {
    const reviews = await reviewService.getReviews();
    return res.status(httpStatus.OK).send(reviews);
  } catch (e) {
    next(e);
  }
}

export async function createReview(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  const body: ReviewBody & { userId: number } = { ...req.body, userId };

  try {
    await reviewService.createReview(body);

    return res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    next(e);
  }
}
