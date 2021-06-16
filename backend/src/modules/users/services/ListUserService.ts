import { injectable, inject } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

@injectable()
class ListUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const user = await this.usersRepository.FindAllUsers();

    return user;
  }
}

export default ListUserService;
