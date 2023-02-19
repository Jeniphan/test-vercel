import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestVercelController } from './test-vercel/test-vercel.controller';
import { TestVercelService } from './test-vercel/test-vercel.service';

@Module({
  imports: [],
  controllers: [AppController, TestVercelController],
  providers: [AppService, TestVercelService],
})
export class AppModule {}
