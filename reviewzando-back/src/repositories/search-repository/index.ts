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

async function findUsersByName(name: string): Promise<FindUser[]> {
  console.log(name);
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
  findUsersByName,
};

export default searchRepository;
