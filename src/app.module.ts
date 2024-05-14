import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreaturesModule } from './creatures/creatures.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CreaturesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}