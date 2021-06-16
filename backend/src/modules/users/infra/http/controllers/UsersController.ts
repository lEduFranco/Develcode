import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import ListUserService from '@modules/users/services/ListUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { code, name, birth_date, avatar } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      code,
      name,
      birth_date,
      avatar,
    });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, code, name, birth_date, avatar } = request.body;

    const updateUser = container.resolve(UpdateUserService);

    const user = await updateUser.execute({id, code, name, birth_date, avatar});

    return response.json(classToClass(user));
  }

  public async index(request: Request, response: Response): Promise<Response> {

    const listUsers = container.resolve(ListUserService);

    const users = await listUsers.execute();

    return response.json(classToClass(users));
  }
}
