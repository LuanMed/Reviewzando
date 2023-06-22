import app, { close, init } from '@/app';
import { cleanDb } from '../helpers';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import httpStatus from 'http-status';
import { createUser } from '../factories';
import { duplicatedEmailError, duplicatedUsernameError } from '@/services';
import { prisma } from '@/config';

beforeAll(async () => {
  await init();
  await cleanDb();
});

afterAll(async () => {
  await close();
});

const server = supertest(app);

describe('POST /signup', () => {
  it('should respond with status 400 when body is not given', async () => {
    const response = await server.post('/signup');

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it('should respond with status 400 when body is not valid', async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post('/signup').send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe('when body is valid', () => {
    const generateValidBody = () => ({
      email: faker.internet.email(),
      password: faker.internet.password({ length: 3 }),
      username: faker.internet.userName(),
      picture_url: faker.internet.url(),
    });

    it('should respond with status 409 when there is an user with given username', async () => {
      const body = generateValidBody();
      const firstUser = await createUser(body);
      const response = await server.post('/signup').send(body);

      expect(response.status).toBe(httpStatus.CONFLICT);
      expect(response.body).toEqual(duplicatedUsernameError());
    });

    it('should respond with status 409 when there is an user with given email', async () => {
      const body = generateValidBody();
      await createUser(body);

      const response = await server.post('/signup').send({ ...body, username: faker.internet.userName() });

      expect(response.status).toBe(httpStatus.CONFLICT);
      expect(response.body).toEqual(duplicatedEmailError());
    });

    it('should respond with status 201 and create user when given email is unique', async () => {
      const body = generateValidBody();

      const response = await server.post('/signup').send(body);

      expect(response.status).toBe(httpStatus.CREATED);
      expect(response.body).toEqual({
        id: expect.any(Number),
        username: body.username,
        email: body.email,
        picture_url: body.picture_url,
      });
    });

    it('should not return user password on body', async () => {
      const body = generateValidBody();

      const response = await server.post('/singup').send(body);

      expect(response.body).not.toHaveProperty('password');
    });

    it('should save user on db', async () => {
      const body = generateValidBody();

      const response = await server.post('/signup').send(body);

      const user = await prisma.user.findUnique({
        where: { email: body.email },
      });

      expect(user).toEqual(
        expect.objectContaining({
          id: response.body.id,
          email: body.email,
          username: body.username,
          picture_url: body.picture_url,
        }),
      );
    });
  });
});
