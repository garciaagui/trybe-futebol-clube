import { ILogin } from '../../interfaces';
import { BadRequestException } from '../../exceptions';

export default class UserValidations {
  public static validateLogin(login: ILogin): void {
    if (!login.email || !login.password) {
      throw new BadRequestException('All fields must be filled');
    }
  }
}
