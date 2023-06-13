import { prisma } from '@/config';
import { FindUser } from '@/protocols';

async function findUsers(): Promise<FindUser[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      picture_url: true,
      username: true,
    },
    orderBy: {
      id: 'desc',
    },
  });
}

async function findUsersById(id: number): Promise<FindUser> {
  return prisma.user.findUnique({
    select: {
      id: true,
      picture_url: true,
      username: true,
    },
    where: {
      id,
    },
  });
}

async function findUsersByName(name: string): Promise<FindUser[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      picture_url: true,
      username: true,
    },
    where: {
      username: {
        startsWith: name,
        mode: 'insensitive',
      },
    },
    orderBy: {
      username: 'asc',
    },
  });
}

const searchRepository = {
  findUsers,
  findUsersById,
  findUsersByName,
};

export default searchRepository;
