import { Controller, Get, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  home(@Request() req, @Response() res): string {
    return this.appService.home();
  }
}
