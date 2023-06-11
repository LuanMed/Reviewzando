import { findUsers, findUsersByName } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const searchRouter = Router();

searchRouter.all('/*', authenticateToken).get('/', findUsers).get('/:username', findUsersByName);

export { searchRouter };
