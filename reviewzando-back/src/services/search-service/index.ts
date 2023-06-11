import { FindUser } from '@/protocols';
import searchRepository from '@/repositories/search-repository';

export async function findUsers(): Promise<FindUser[]> {
  const users = searchRepository.findUsers();
  return users;
}
