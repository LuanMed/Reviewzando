import { AuthenticatedRequest } from '@/middlewares';
import followService from '@/services/follows-service';
import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';

export async function getFollowsById(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  try {
    const follows = await followService.getFollowsById(userId);
    return res.status(httpStatus.OK).send(follows);
  } catch (e) {
    next(e);
  }
}

export async function followUser(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const followerId = req.userId;
  const followingId = Number(req.body.followingId);

  try {
    await followService.follow(followerId, followingId);

    return res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    next(e);
  }
}

export async function unfollowUser(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const followerId = req.userId;
  const followingId = Number(req.params.followingId);

  try {
    await followService.unFollow(followerId, followingId);

    return res.sendStatus(httpStatus.ACCEPTED);
  } catch (e) {
    console.log(e);
    next(e);
  }
}
