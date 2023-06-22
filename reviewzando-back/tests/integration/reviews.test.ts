import app, { close, init } from '@/app';
import { cleanDb, generateValidToken } from '../helpers';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import httpStatus from 'http-status';
import { createReview, createUser } from '../factories';
import * as jwt from 'jsonwebtoken';
import { prisma } from '@/config';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

afterAll(async () => {
  await close();
});

const server = supertest(app);

describe('GET /reviews', () => {
  it('should respond with status 401 if no token is given', async () => {
    const response = await server.get('/reviews');

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if given token is not valid', async () => {
    const token = faker.lorem.word();

    const response = await server.get('/reviews').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if there is no session for given token', async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await server.get('/reviews').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe('when token is valid', () => {
    it('should respond with empty array when there are no reviews for the user', async () => {
      const token = await generateValidToken();

      const response = await server.get('/reviews').set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toEqual([]);
    });

    it('should respond with status 200 and with existing reviews data', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const review = await createReview(user.id);
      const response = await server.get('/reviews').set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toEqual([
        {
          id: review.id,
          title: review.title,
          poster: review.poster,
          flowScore: review.flowScore,
          plotScore: review.plotScore,
          outcomeScore: review.outcomeScore,
          average: review.average,
          description: review.description,
          userId: review.userId,
          User: {
            username: user.username,
            picture_url: user.picture_url,
          },
        },
      ]);
    });
  });
});

describe('POST /reviews', () => {
  it('should respond with status 401 if no token is given', async () => {
    const response = await server.post('/reviews');

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if given token is not valid', async () => {
    const token = faker.lorem.word();

    const response = await server.post('/reviews').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if there is no session for given token', async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await server.post('/reviews').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe('when token is valid', () => {
    it('should respond with status 400 when body is not given', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const response = await server.post('/reviews').set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it('should respond with status 400 when body is not valid', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

      const response = await server.post('/reviews').set('Authorization', `Bearer ${token}`).send(invalidBody);

      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    describe('when body is valid', () => {
      const generateValidBody = () => ({
        title: faker.lorem.sentence(),
        poster: faker.internet.url(),
        plotScore: faker.number.float(),
        outcomeScore: faker.number.float(),
        flowScore: faker.number.float(),
        description: faker.lorem.sentence(),
      });

      it('should respond with status 201', async () => {
        const user = await createUser();
        const token = await generateValidToken(user);
        const body = generateValidBody();

        const response = await server.post('/reviews').set('Authorization', `Bearer ${token}`).send(body);

        expect(response.status).toBe(httpStatus.CREATED);
      });

      it('should insert a new review in the database', async () => {
        const user = await createUser();
        const token = await generateValidToken(user);

        const beforeCount = await prisma.review.count();

        const body = generateValidBody();
        await server.post('/reviews').set('Authorization', `Bearer ${token}`).send(body);

        const afterCount = await prisma.review.count();

        expect(beforeCount).toEqual(0);
        expect(afterCount).toEqual(1);
      });
    });
  });
});
