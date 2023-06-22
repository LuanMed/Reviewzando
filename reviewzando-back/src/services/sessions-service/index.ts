import bcrypt from 'bcrypt';
import sessionRepository from '@/repositories/sessions-repository';
import usersRepository from '@/repositories/users-repository';
import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { invalidCredentialsError } from './errors';
import { exclude } from '@/utils/prisma-utils';

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUser(email);

  await validatePassword(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, 'password'),
    token,
  };
}

async function getUser(email: string): Promise<GetUserOrFailResult> {
  const user = await usersRepository.findByEmail(email);

  if (!user) throw invalidCredentialsError();

  return user;
}

async function validatePassword(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.createSession({
    token,
    userId,
  });

  return token;
}

export type SignInParams = Pick<User, 'email' | 'password'>;

type SignInResult = {
  user: Pick<User, 'id' | 'username' | 'email'>;
  token: string;
};

type GetUserOrFailResult = Pick<User, 'id' | 'username' | 'email' | 'password'>;

const sessionsService = {
  signIn,
};

export default sessionsService;
export * from './errors';
