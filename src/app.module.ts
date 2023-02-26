import { CommonModule } from './common/common.module';
import { TodoModule } from './todo/todo.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CommonModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
