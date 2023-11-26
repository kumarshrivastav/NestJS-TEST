import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
@Controller('user')
export class UserController {


  @Post()
  create() {
    return "This api endpoint will add user"
  }
  @Get()
  findAll() {
    return "This api endpoint will give all the user list"
  }
}
