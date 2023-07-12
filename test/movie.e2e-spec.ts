import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MovieModule } from '../src/movie.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MovieModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/movies/:movieName (GET)', () => {
    return request(app.getHttpServer()).get('/movies/avengers').expect(200);
  });
  it('/movies/:movieName (GET) throw movie not found', () => {
    return request(app.getHttpServer())
      .get('/movies/asdsdsadaswqewqe')
      .expect(404);
  });
});
