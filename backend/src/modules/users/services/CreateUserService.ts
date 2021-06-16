import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  code: number,
  name: string,
  birth_date: string,
  avatar: string,
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ code, name, birth_date, avatar }: IRequest): Promise<User> {
    const checkUserExistis = await this.usersRepository.findByCode(code);

    if (checkUserExistis) {
      throw new AppError('Code already used.');
    }

    const user = await this.usersRepository.create({
      code, name, birth_date, avatar
    });

    return user;
  }
}

export default CreateUserService;
