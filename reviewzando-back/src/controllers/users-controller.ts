import usersService from '@/services/users-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function postUser(req: Request, res: Response) {
  const { username, email, password, picture_url } = req.body;
  try {
    const user = await usersService.createUser({ username, email, password, picture_url });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      username: user.username,
      email: user.email,
      picture_url: user.picture_url,
    });
  } catch (error) {
    if (error.name === 'DuplicatedEmailError' || error.name === 'DuplicatedUsernameError') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
