import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':movieName')
  async getMovie(@Param('movieName') movieName: string) {
    return await this.movieService.getMovie(movieName);
  }
}
