import { Injectable } from '@nestjs/common';

@Injectable()
export class TestVercelService {

  /**
   * getHello
   */
  public getHello() {
    return "Hello Vercel"
  }
}
