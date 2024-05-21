import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto): Promise<Worker> {
    return this.workerService.create(createWorkerDto);
  }

  @Get()
  findAll(): Promise<Worker[]> {
    return this.workerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Worker> {
    return this.workerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkerDto: UpdateWorkerDto,
  ): Promise<Worker> {
    return this.workerService.update(+id, updateWorkerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Worker> {
    return this.workerService.remove(+id);
  }
}
