import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { ErrorResponse, MovieDTO, MovieResponse } from './movie.type';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  checkError(data: MovieResponse | ErrorResponse): data is ErrorResponse {
    return 'Error' in data;
  }

  formatMovieData(data: MovieResponse): MovieDTO {
    const runtime = data.Runtime.split('Duration: ')[0];
    const movie: MovieDTO = {
      title: data.Title,
      year: data.Year,
      actors: data.Actors,
      awards: data.Awards,
      genre: data.Genre,
      plot: data.Plot,
      poster: data.Poster,
      released: data.Released,
      runtime,
      imdbRating: data.imdbRating,
    };
    return movie;
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
    return this.formatMovieData(data);
  }
}
