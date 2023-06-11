import { findUsers } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const searchRouter = Router();

searchRouter.all('/*', authenticateToken).get('/', findUsers);

export { searchRouter };
