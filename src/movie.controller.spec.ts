import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('MovieController', () => {
  let movieController: MovieController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule],
      controllers: [MovieController],
      providers: [MovieService],
    }).compile();

    movieController = app.get<MovieController>(MovieController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const movieName = 'the avengers';
      const res = await movieController.getMovie(movieName);
      expect(res.title.toLowerCase()).toBe(movieName);
    });
  });
});
