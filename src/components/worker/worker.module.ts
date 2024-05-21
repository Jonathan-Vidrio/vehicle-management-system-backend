import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { DatabaseModule } from '../../database/database.module';
import { WorkerProvider } from './worker.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkerController],
  providers: [...WorkerProvider, WorkerService],
})
export class WorkerModule {}
