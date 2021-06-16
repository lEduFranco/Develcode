import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IEditUserDTO from '../dtos/IEditUserDTO';

export default interface IUsersRepository {
  findByCode(code: number): Promise<User | undefined>;
  FindAllUsers(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  updateUser(userData: IEditUserDTO): Promise<User  | undefined>;
}
