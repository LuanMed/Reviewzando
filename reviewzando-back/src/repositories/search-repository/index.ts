import { prisma } from '@/config';
import { FindUser } from '@/protocols';

async function findUsers(id: number): Promise<FindUser[]> {
  const followedUserIds = await prisma.follow
    .findMany({
      where: {
        followerId: id,
      },
      select: {
        followingId: true,
      },
    })
    .then((follows) => follows.map((follow) => follow.followingId));

  return prisma.user.findMany({
    select: {
      id: true,
      picture_url: true,
      username: true,
    },
    orderBy: {
      id: 'desc',
    },
    where: {
      NOT: {
        id: id,
      },
      id: {
        notIn: followedUserIds,
      },
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
