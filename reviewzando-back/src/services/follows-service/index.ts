import followRepository from '@/repositories/follows-repository';
import { Follow } from '@prisma/client';

async function getFollowsById(id: number): Promise<Follow[]> {
  const follows: Follow[] = await followRepository.getFollowsById(id);
  return follows;
}

async function follow(followerId: number, followingId: number): Promise<Follow> {
  return await followRepository.follow(followerId, followingId);
}

async function unFollow(followerId: number, followingId: number): Promise<Follow> {
  await followRepository.unFollow(followerId, followingId);
  return;
}

const followService = {
  getFollowsById,
  follow,
  unFollow,
};

export default followService;
