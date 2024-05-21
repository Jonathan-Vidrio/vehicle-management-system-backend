import { Worker } from './entities/worker.entity';

export const WorkerProvider = [
  {
    provide: 'WORKER_REPOSITORY',
    useValue: Worker,
  },
];
