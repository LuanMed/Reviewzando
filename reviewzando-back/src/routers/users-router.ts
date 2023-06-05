import { postUser } from '@/controllers/users-controller';
import { validateBody } from '@/middlewares/validation-middleware';
import { createUserSchema } from '@/schemas';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', validateBody(createUserSchema), postUser);

export { usersRouter };
