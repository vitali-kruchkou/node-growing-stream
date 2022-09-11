import { USER_REPOSITORY } from 'src/core/database/constants';
import { Users } from './users.entity';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: Users,
  },
];
