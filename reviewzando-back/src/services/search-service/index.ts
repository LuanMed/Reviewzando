import { FindUser } from '@/protocols';
import searchRepository from '@/repositories/search-repository';

async function findUsers(): Promise<FindUser[]> {
  const users = searchRepository.findUsers();
  return users;
}

async function findUsersById(id: number): Promise<FindUser> {
  const user = searchRepository.findUsersById(id);
  return user;
}

async function findUsersByName(name: string): Promise<FindUser[]> {
  const users = searchRepository.findUsersByName(name);
  return users;
}

const searchService = {
  findUsers,
  findUsersById,
  findUsersByName,
};

export default searchService;
