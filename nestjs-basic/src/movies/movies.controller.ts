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

@Controller('/movies')
export class MoviesController {
  @Get('/')
  getAllMovies() {
    return 'getAllMovies';
  }

  @Get('/search')
  searchMovie(@Query('year') year: string) {
    return `searchMovie by year: ${year}`;
  }

  @Get('/:id')
  getMovie(@Param('id') id: string) {
    return `getMovie ${id}`;
  }

  @Post('/')
  createMovie(@Body() data: object) {
    return data;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `deleteMovie ${id}`;
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: string, @Body() data) {
    return { updatedMovieId: id, ...data };
  }
}
