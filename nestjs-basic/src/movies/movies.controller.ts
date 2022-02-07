import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dtos/createMovie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {
    console.log('moviesService', moviesService);
  }

  @Get('/')
  getAllMovies(): MovieEntity[] {
    return this.moviesService.getAllMovies();
  }

  @Get('/:id')
  getMovie(@Param('id') id: number): MovieEntity {
    return this.moviesService.getMovie(id);
  }

  @Post('/')
  createMovie(@Body() createMovieDto: CreateMovieDto): boolean {
    return this.moviesService.createMovie(createMovieDto);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: number): boolean {
    return this.moviesService.deleteMovie(id);
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: number, @Body() data: any): MovieEntity {
    return this.moviesService.updateMovie(id, data);
  }
}
