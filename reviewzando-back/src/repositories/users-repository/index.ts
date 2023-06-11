import { prisma } from '@/config';
import { Prisma, User } from '@prisma/client';

async function findByEmail(email: string): Promise<User> {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function findByUsername(username: string): Promise<User> {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

async function createUser(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

const usersRepository = {
  findByEmail,
  findByUsername,
  createUser,
};

export default usersRepository;
