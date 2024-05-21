import { Inject, Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';

@Injectable()
export class WorkerService {
  constructor(
    @Inject('WORKER_REPOSITORY')
    private workerRepository: typeof Worker,
  ) {}

  async create(createWorkerDto: CreateWorkerDto): Promise<Worker> {
    return await this.workerRepository.create({
      ...createWorkerDto,
    });
  }

  async findAll(): Promise<Worker[]> {
    return await this.workerRepository.findAll();
  }

  async findOne(id: number): Promise<Worker> {
    return await this.workerRepository.findByPk(id);
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto): Promise<Worker> {
    const worker = await this.workerRepository.findByPk(id);

    if (worker) {
      await worker.update({ ...updateWorkerDto });

      return worker;
    }
  }

  async remove(id: number): Promise<Worker> {
    const worker = await this.workerRepository.findByPk(id);

    if (worker) {
      await worker.destroy();

      return worker;
    }
  }
}
