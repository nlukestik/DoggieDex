import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllDogs(): object[] {
    return [{}];
  }

  addDog(): object {
    return {};
  }

  getDog({ id }: { id: number }): object {
    return {};
  }
}
