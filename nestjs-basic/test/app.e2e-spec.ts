import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  describe('/ (Root)', () => {
    it('/ (GET)', () => {
      return request(app.getHttpServer()).get('/').expect(200).expect('Home');
    });
  });

  describe('/movies (Movies)', () => {
    it('/ (GET) (getAllMovies)', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    it('/ (POST) (createMovie)', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'Test Movie', year: 2022, genres: ['Action'] })
        .expect(201)
        .expect('true');
    });

    it('/ (POST) (createMovie) (Exception)', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'Test Movie',
          year: 2022,
          genres: ['Action'],
          hack: 'hack',
        })
        .expect(400)
        .expect(
          '{"statusCode":400,"message":["property hack should not exist"],"error":"Bad Request"}',
        );
    });

    it('/:id (GET) (getMovie)', () => {
      return request(app.getHttpServer())
        .get('/movies/999')
        .expect(404)
        .expect(
          '{"statusCode":404,"message":"Not Found Movie: 999","error":"Not Found"}',
        );
    });

    it('/:id (GET) (getMovie) (Exception)', () => {
      return request(app.getHttpServer())
        .get('/movies/1')
        .expect(200)
        .expect(
          '{"id":1,"title":"Test Movie","year":2022,"genres":["Action"]}',
        );
    });

    it('/:id (PATCH) (updateMovie)', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({ title: 'Update Movie', year: 2020, genres: ['Comedy'] })
        .expect(200)
        .expect(
          '{"id":1,"title":"Update Movie","year":2020,"genres":["Comedy"]}',
        );
    });

    it('/:id (PATCH) (updateMovie) (Exception)', () => {
      return request(app.getHttpServer())
        .patch('/movies/999')
        .send({ title: 'Update Movie', year: 2020, genres: ['Comedy'] })
        .expect(404)
        .expect(
          '{"statusCode":404,"message":"Not Found Movie: 999","error":"Not Found"}',
        );
    });

    it('/:id (DELETE) (deleteMovie)', () => {
      return request(app.getHttpServer())
        .delete('/movies/1')
        .expect(200)
        .expect('true');
    });

    it('/:id (DELETE) (deleteMovie) (Exception)', () => {
      return request(app.getHttpServer())
        .delete('/movies/999')
        .expect(404)
        .expect(
          '{"statusCode":404,"message":"Not Found Movie: 999","error":"Not Found"}',
        );
    });
  });
});
