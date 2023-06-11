import { prisma } from '@/config';
import { FindUser } from '@/protocols';

async function findUsers(): Promise<FindUser[]> {
  return prisma.user.findMany({
    select: {
      id: true,
      picture_url: true,
      username: true,
    },
  });
}

const searchRepository = {
  findUsers,
};

export default searchRepository;
