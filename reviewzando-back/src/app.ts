import { connectDb, disconnetDb, loadEnv } from '@/config';
import express, { Express } from 'express';
import cors from 'cors';
import { reviewRouter, sessionsRouter, usersRouter } from '@/routers';
import { handleApplicationErrors } from './middlewares';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/signup', usersRouter)
  .use('/signin', sessionsRouter)
  .use('/new-review', reviewRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function clore(): Promise<void> {
  await disconnetDb();
}

export default app;
