import { prisma } from '@/config';
import { Follow } from '@prisma/client';

async function getFollowsById(id: number): Promise<Follow[]> {
  return prisma.follow.findMany({
    where: {
      followerId: id,
    },
  });
}

async function follow(followerId: number, followingId: number): Promise<Follow> {
  return prisma.follow.create({
    data: {
      followerId,
      followingId,
    },
  });
}

async function unFollow(followerId: number, followingId: number): Promise<void> {
  console.log(followerId);
  console.log(followingId);
  await prisma.follow.deleteMany({
    where: {
      followerId,
      followingId,
    },
  });
}

const followRepository = {
  getFollowsById,
  follow,
  unFollow,
};

export default followRepository;
