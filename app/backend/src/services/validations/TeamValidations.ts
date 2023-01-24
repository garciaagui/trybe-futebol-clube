import { BadRequestException } from '../../exceptions';

export default class TeamValidations {
  public static validateId(id: number): void {
    if (typeof id !== 'number' || Number.isNaN(id)) {
      throw new BadRequestException('Id must be a number');
    }
  }
}
