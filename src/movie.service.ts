import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MovieDTO, MovieResponse } from './movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  async getMovie(movieName: string): Promise<MovieDTO> {
    const { data } = await this.httpService.axiosRef.get<MovieResponse>(
      `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}&plot=full`,
    );
    const movie: MovieDTO = {
      title: data.Title,
      year: data.Year,
      actors: data.Actors,
      awards: data.Awards,
      genre: data.Genre,
      plot: data.Plot,
      poster: data.Poster,
      released: data.Released,
      runtime: data.Runtime,
      imdbRating: data.imdbRating,
    };
    return movie;
  }
}
