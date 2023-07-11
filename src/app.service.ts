import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MovieDTO } from './movie.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getMovie(movieName: string): Promise<MovieDTO> {
    const { data } = await this.httpService.axiosRef.get<MovieDTO>(
      `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}`,
    );
    return data;
  }
}
