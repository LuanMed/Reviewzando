import { CreateUserParams } from '@/services';
import Joi from 'joi';

export const createUserSchema = Joi.object<CreateUserParams>({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  picture_url: Joi.string().uri().required(),
});
