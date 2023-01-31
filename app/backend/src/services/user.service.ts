import * as bcrypt from 'bcryptjs';
import { UnauthorizedException } from '../exceptions';
import generateToken from '../utils/generateToken';
import { ILogin, IUser } from '../interfaces';
import User from '../database/models/User';
import { IUserService } from './interfaces';
import UserValidations from './validations/UserValidations';

export default class UserService implements IUserService {
  constructor(private _model = User) {}

  public async getByEmail(email: string): Promise<IUser | null> {
    const user = await this._model.findOne({ where: { email } });

    return user;
  }

  public async login(login: ILogin): Promise<string | null> {
    UserValidations.validateLogin(login);

    const user = await this.getByEmail(login.email) as IUser;

    if (!user || !bcrypt.compareSync(login.password, user.password)) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const token = generateToken(user?.email);

    return token;
  }
}
