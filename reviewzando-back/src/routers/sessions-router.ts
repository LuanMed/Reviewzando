import { signIn } from '@/controllers';
import { validateBody } from '@/middlewares/validation-middleware';
import { signInSchema } from '@/schemas/sessions-schema';
import { Router } from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', validateBody(signInSchema), signIn);

export { sessionsRouter };
