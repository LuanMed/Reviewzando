import { ReviewBody } from '@/protocols';
import Joi from 'joi';

export const reviewSchema = Joi.object<ReviewBody>({
  title: Joi.string().required(),
  poster: Joi.string().uri().required(),
  description: Joi.string().required(),
  plotScore: Joi.number().required(),
  flowScore: Joi.number().required(),
  outcomeScore: Joi.number().required(),
});
