import { Test, TestingModule } from '@nestjs/testing';
import { MovieEntity } from './entities/movie.entity';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let createMovieResult: boolean;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    moviesService = module.get<MoviesService>(MoviesService);

    createMovieResult = moviesService.createMovie({
      title: 'Test Movie',
      year: 2022,
      genres: ['Action'],
    });
  });

  it('should be defined', () => {
    expect<MoviesService>(moviesService).toBeDefined();
  });

  describe('getAllMovies', () => {
    it('should get all movies', () => {
      const getAllMoviesResult: MovieEntity[] = moviesService.getAllMovies();
      expect(getAllMoviesResult).toBeInstanceOf(Array);
    });
  });

  describe('getMovie', () => {
    it('should get a movie', () => {
      const getMovieResult: MovieEntity | undefined = moviesService.getMovie(1);

      expect(createMovieResult).toBeTruthy();
      expect(getMovieResult).toEqual({
        id: 1,
        title: 'Test Movie',
        year: 2022,
        genres: ['Action'],
      });
    });

    it('should throw 404 error', () => {
      const getMovieFunction: () => MovieEntity = () =>
        moviesService.getMovie(999);

      expect(getMovieFunction).toThrowError();
      expect(getMovieFunction).toThrowError(/Not Found Movie: 999/g);
    });
  });

  describe('createMovie', () => {
    it('should create a movie', () => {
      expect(createMovieResult).toBeTruthy();
    });
  });

  describe('deleteMovie', () => {
    it('should delete a movie', () => {
      const deleteMovieResult: boolean = moviesService.deleteMovie(1);

      expect(createMovieResult).toBeTruthy();
      expect(deleteMovieResult).toBeTruthy();
    });

    it('should throw 404 error', () => {
      const deleteMovieFunction: () => boolean = () =>
        moviesService.deleteMovie(999);

      expect(deleteMovieFunction).toThrowError();
      expect(deleteMovieFunction).toThrowError('Not Found Movie: 999');
    });
  });

  describe('updateMovie', () => {
    it('should update a movie', () => {
      const updateMovieResult: MovieEntity = moviesService.updateMovie(1, {
        title: 'Update Movie',
        year: 2000,
        genres: ['Comedy'],
      });

      expect(createMovieResult).toBeTruthy();
      expect(updateMovieResult).toEqual({
        id: 1,
        title: 'Update Movie',
        year: 2000,
        genres: ['Comedy'],
      });
    });

    it('should throw 404 error', () => {
      const updateMovieFunction: () => MovieEntity = () =>
        moviesService.updateMovie(999, {
          title: 'Update Movie',
          year: 2000,
          genres: ['Comedy'],
        });

      expect(updateMovieFunction).toThrowError();
      expect(updateMovieFunction).toThrowError('Not Found Movie: 999');
    });
  });
});
