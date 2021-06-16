import { injectable, inject } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  id: string;
  code: number,
  name: string,
  birth_date: string,
  avatar: string,
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(data: IRequest): Promise<User | undefined> {
    const user = await this.usersRepository.updateUser(data);

    return user;
  }
}

export default UpdateUserService;
