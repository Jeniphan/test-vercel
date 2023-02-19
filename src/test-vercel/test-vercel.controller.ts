import { Controller, Get } from '@nestjs/common';
import { TestVercelService } from './test-vercel.service';

@Controller('test-vercel')
export class TestVercelController {
  constructor(private readonly testVercel: TestVercelService) { }
  @Get()
  getHello(): string {
    return this.testVercel.getHello();
  }
}
