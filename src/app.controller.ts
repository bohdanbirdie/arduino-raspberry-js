import { Get, Post, Body, Controller } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Post()
  write(@Body() data: any) {
    this.appService.write(data);
  }

}
