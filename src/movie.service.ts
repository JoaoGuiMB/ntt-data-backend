import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { ErrorResponse, MovieDTO, MovieResponse } from './movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  checkError(data: MovieResponse | ErrorResponse): data is ErrorResponse {
    return 'Error' in data;
  }

  async getMovie(movieName: string): Promise<MovieDTO> {
    const { data } = await this.httpService.axiosRef.get<
      MovieResponse | ErrorResponse
    >(
      `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}&plot=full`,
    );

    if (this.checkError(data)) {
      throw new HttpException(data.Error, 404);
    }

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
