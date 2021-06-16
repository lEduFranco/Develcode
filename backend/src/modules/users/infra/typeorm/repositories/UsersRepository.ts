import { getRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IEditUserDTO from '@modules/users/dtos/IEditUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByCode(code: number): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { code },

    });

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async updateUser({id, code, name, birth_date, avatar}: IEditUserDTO): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    return this.ormRepository.save({
      ...user,
      id, code, name, birth_date, avatar,
    });
  }

  public async FindAllUsers(): Promise<User[]> {
    const user = await this.ormRepository
    .createQueryBuilder('users')
    .getMany()

    return user;
  }

}

export default UsersRepository;
