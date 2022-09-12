import { Controller, Request, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guards';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
