import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';
import { prisma } from '@/config';

export async function createUser(params: Partial<User> = {}): Promise<User> {
  const incomingPassword = params.password || faker.internet.password({ length: 3 });
  const hashedPassword = await bcrypt.hash(incomingPassword, 10);

  return await prisma.user.create({
    data: {
      email: params.email || faker.internet.email(),
      password: hashedPassword,
      username: params.username || faker.internet.userName(),
      picture_url: params.picture_url || faker.internet.url(),
    },
  });
}
