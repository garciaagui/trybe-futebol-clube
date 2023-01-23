import { ILogin, IUser } from '../../interfaces';

export interface IUserService {
  getByEmail(email: string): Promise<IUser | null>
  login(login: ILogin): Promise<string | null>;
}
