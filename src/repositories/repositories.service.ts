import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from './entities/repository.entity';

@Injectable()
export class RepositoriesService {
  private repositories: Repository[] = [
    {
      id: 1,
      state: 604,
    },
    {
      id: 2,
      state: 605,
    },
    {
      id: 3,
      state: 606,
    },
  ];
  findAll() {
    return this.repositories;
  }

  findOne(id: number) {
    const repositorie = this.repositories.find((item) => item.id === id);
    if (!repositorie) {
      throw new NotFoundException(`Repositorie #${id} not found`);
    }
    return repositorie;
  }
}
