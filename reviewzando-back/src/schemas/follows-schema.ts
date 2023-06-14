import { FollowBody } from '@/protocols';
import Joi from 'joi';

export const followSchema = Joi.object<FollowBody>({
  followingId: Joi.number().required(),
});
