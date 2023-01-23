import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../services/interfaces/IUserService';
import statusCodes from '../utils/statusCodes';

export default class UserController {
  constructor(private _service: IUserService) {}

  public getRole =
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const { email } = req.body.user;

      const user = await this._service.getByEmail(email);

      res.status(statusCodes.ok).json({ role: user?.role });
    } catch (error) {
      next(error);
    }
  };

  public login =
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const login = req.body;

      const token = await this._service.login(login);

      res.status(statusCodes.ok).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
