import { followUser, getFollowsById, unfollowUser } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { followSchema } from '@/schemas';
import { Router } from 'express';

const followRouter = Router();

followRouter
  .all('/*', authenticateToken)
  .get('/', getFollowsById)
  .post('/', validateBody(followSchema), followUser)
  .delete('/:followingId', unfollowUser);

export { followRouter };
