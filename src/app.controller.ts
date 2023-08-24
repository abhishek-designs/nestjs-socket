import {
  Controller,
  Get,
  Post,
  HttpCode,
  Query,
  Redirect,
  Param,
  Req,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CreateUserDto } from 'dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    // return this.appService.getHello();
  }

  @Post('create')
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto.name);
    return 'User has been created';
    // return this.appService.create();
  }

  @Get('redirect-google')
  @HttpCode(204)
  @Redirect('https://www.google.com')
  redirectGoogle(@Query() query: { id: 3 }) {
    console.log(query.id, 'some id');
  }

  @Get(':id')
  showProfile(@Param() params: { id: string }, @Req() req: Request): string {
    console.log(params, 'received params');
    console.log(req.ip, "user's IP");
    return `I'm showing you the profile for user id ${params.id}`;
  }

  @Get()
  index(): string {
    return 'Welcome to Skibidi toilet';
  }
}
