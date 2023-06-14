import { AuthenticatedRequest } from '@/middlewares';
import searchService from '@/services/search-service';
import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';

export async function findUsers(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  try {
    const users = await searchService.findUsers(userId);
    return res.status(httpStatus.OK).send(users);
  } catch (e) {
    next(e);
  }
}

export async function findUsersById(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const id = Number(req.params.id);

  try {
    const user = await searchService.findUsersById(id);
    return res.status(httpStatus.OK).send(user);
  } catch (e) {
    next(e);
  }
}

export async function findUsersByName(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { username } = req.params;

  try {
    const users = await searchService.findUsersByName(username);
    return res.status(httpStatus.OK).send(users);
  } catch (e) {
    next(e);
  }
}
