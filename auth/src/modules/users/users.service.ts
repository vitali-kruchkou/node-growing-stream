import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/database/constants';
import { Users } from './users.entity';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof Users,
  ) {}

  async create(user): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
