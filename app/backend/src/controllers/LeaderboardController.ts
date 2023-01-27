import { NextFunction, Request, Response } from 'express';
import { ILeaderboardService } from '../services/interfaces/ILeaderboardService';
import statusCodes from '../utils/statusCodes';

export default class LeaderboardController {
  constructor(private _service: ILeaderboardService) {}

  public getHomeGamesStadings =
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const standings = await this._service.getStandingsByReference('home');

      res.status(statusCodes.ok).json(standings);
    } catch (error) {
      next(error);
    }
  };
}
