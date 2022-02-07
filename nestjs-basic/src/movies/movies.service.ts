import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dtos/createMovie.dto';
import { MovieEntity } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: MovieEntity[] = [];

  getAllMovies(): MovieEntity[] {
    const allMovies: MovieEntity[] = this.movies;
    return allMovies;
  }

  getMovie(id: number): MovieEntity {
    const foundMovie: MovieEntity | undefined = this.movies.find(
      (movie: MovieEntity) => movie.id === +id,
    );

    if (foundMovie === undefined) {
      throw new NotFoundException(`Not Found Movie: ${id}`);
    }

    return foundMovie;
  }

  createMovie(createMovieDto: CreateMovieDto): boolean {
    console.log('createMovieDto', createMovieDto);

    this.movies.push({
      id: this.movies.length + 1,
      ...createMovieDto,
    });
    return true;
  }

  deleteMovie(id: number): boolean {
    this.getMovie(id);
    const filteredMovies = this.movies.filter(
      (movie: MovieEntity) => movie.id !== +id,
    );
    this.movies = filteredMovies;
    return true;
  }

  updateMovie(id: number, data: any): MovieEntity {
    const foundMovie = this.getMovie(id);
    this.deleteMovie(id);
    const updatedMovie = { ...foundMovie, ...data };
    this.movies.push(updatedMovie);
    return updatedMovie;
  }
}
