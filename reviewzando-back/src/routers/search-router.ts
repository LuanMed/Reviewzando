import { findUsers, findUsersById, findUsersByName } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const searchRouter = Router();

searchRouter
  .all('/*', authenticateToken)
  .get('/', findUsers)
  .get('/:id', findUsersById)
  .get('/name/:username', findUsersByName);

export { searchRouter };
