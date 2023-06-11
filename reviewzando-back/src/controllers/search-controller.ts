import { AuthenticatedRequest } from '@/middlewares';
import searchService from '@/services/search-service';
import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';

export async function findUsers(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  try {
    const users = await searchService.findUsers();
    return res.status(httpStatus.OK).send(users);
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
