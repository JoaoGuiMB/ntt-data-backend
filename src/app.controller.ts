import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':movieName')
  async getMovie(@Param('movieName') movieName: string) {
    return await this.appService.getMovie(movieName);
  }
}
