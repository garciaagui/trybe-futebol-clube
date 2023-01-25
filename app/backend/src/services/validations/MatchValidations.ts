import { BadRequestException, UnprocessableException } from '../../exceptions';

export default class MatchValidations {
  public static validateId(id: number): void {
    if (typeof id !== 'number' || Number.isNaN(id)) {
      throw new BadRequestException('Id must be a number');
    }
  }

  public static validateInProgressValue(value: string | null): void {
    if (value !== 'true' && value !== 'false') {
      throw new BadRequestException('Value must be "true" or "false"');
    }
  }

  public static validateTeams(team1: number, team2: number): void {
    if (team1 === team2) {
      throw new UnprocessableException('It is not possible to create a match with two equal teams');
    }
  }

  public static validateGoals(homeGoals: number, awayGoals: number): void {
    if (Number.isNaN(homeGoals) || Number.isNaN(awayGoals)) {
      throw new BadRequestException('Goals values must be numbers');
    }
  }
}
