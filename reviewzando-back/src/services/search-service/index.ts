import { FindUser } from '@/protocols';
import searchRepository from '@/repositories/search-repository';

async function findUsers(): Promise<FindUser[]> {
  const users = searchRepository.findUsers();
  return users;
}

async function findUsersByName(name: string): Promise<FindUser[]> {
  const users = searchRepository.findUsersByName(name);
  return users;
}

const searchService = {
  findUsers,
  findUsersByName,
};

export default searchService;
