import bcrypt from 'bcrypt';
import usersRepository from '@/repositories/users-repository';
import { User } from '@prisma/client';
import { duplicatedEmailError, duplicatedUsernameError } from './errors';

export async function createUser({ username, email, password, picture_url }: CreateUserParams): Promise<User> {
  await validadeUniqueUsername(username);

  await validadeUniqueEmail(email);

  const hashedPassword = await bcrypt.hash(password, 10);
  return usersRepository.createUser({
    username,
    email,
    password: hashedPassword,
    picture_url,
  });
}

async function validadeUniqueUsername(username: string) {
  const userWithSameUsername = await usersRepository.findByUsername(username);
  if (userWithSameUsername) throw duplicatedUsernameError();
}

async function validadeUniqueEmail(email: string) {
  const userWithSameEmail = await usersRepository.findByEmail(email);
  if (userWithSameEmail) throw duplicatedEmailError();
}

export type CreateUserParams = Omit<User, 'id'>;

const usersService = {
  createUser,
};

export * from './errors';
export default usersService;
