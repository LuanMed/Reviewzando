import app, { close, init } from '@/app';
import { cleanDb } from '../helpers';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import httpStatus from 'http-status';
import { createUser } from '../factories';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('POST /signin', () => {
  it('should respond with status 400 when body is not given', async () => {
    const response = await server.post('/signin');

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it('should respond with status 400 when body is not valid', async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post('/signin').send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe('when body is valid', () => {
    const generateValidBody = () => ({
      email: faker.internet.email(),
      password: faker.internet.password({ length: 3 }),
      username: faker.internet.userName(),
      picture_url: faker.internet.url(),
    });

    it('should respond with status 401 if there is no user for given email', async () => {
      const userBody = generateValidBody();
      const body = { email: userBody.email, password: userBody.password };

      const response = await server.post('/signin').send(body);

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it('should respond with status 401 if there is a user for given email but password is not correct', async () => {
      const userBody = generateValidBody();
      await createUser(userBody);
      const body = { email: userBody.email, password: userBody.password };

      const response = await server.post('/signin').send({
        ...body,
        password: faker.lorem.word(),
      });

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe('when credentials are valid', () => {
      it('should respond with status 200', async () => {
        const userBody = generateValidBody();
        await createUser(userBody);
        const body = { email: userBody.email, password: userBody.password };

        const response = await server.post('/signin').send(body);
        expect(response.status).toBe(httpStatus.OK);
      });

      it('should respond with user data', async () => {
        const userBody = generateValidBody();
        const user = await createUser(userBody);
        const body = { email: userBody.email, password: userBody.password };

        const response = await server.post('/signin').send(body);

        expect(response.body.user).toEqual({
          id: user.id,
          email: user.email,
          username: user.username,
          picture_url: user.picture_url,
        });
      });

      it('should respond with session token', async () => {
        const userBody = generateValidBody();
        await createUser(userBody);
        const body = { email: userBody.email, password: userBody.password };

        const response = await server.post('/signin').send(body);

        expect(response.body.token).toBeDefined();
      });
    });
  });
});
