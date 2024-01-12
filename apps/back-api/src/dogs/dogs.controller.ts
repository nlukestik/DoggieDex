import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  getAllDogs() {}

  @Post()
  addDog(@Body() body: any) {
    console.log({ body });
  }

  @Get('/:id')
  getDog(@Param() id: number) {
    console.log({ id });
  }
}
