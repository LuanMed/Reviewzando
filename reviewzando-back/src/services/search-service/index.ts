import { FindUser } from '@/protocols';
import searchRepository from '@/repositories/search-repository';

async function findUsers(): Promise<FindUser[]> {
  const users = searchRepository.findUsers();
  return users;
}

const searchService = {
  findUsers,
};

export default searchService;
