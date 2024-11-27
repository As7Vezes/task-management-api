import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sendMorOrLes(): string {
    const date = new Date();
    const hour = date.getHours()

    if (hour >= 6 && hour < 12){
      return "les"
    } else {
      return "mor "
    }
  }
}
