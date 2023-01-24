import { BadRequestException } from '../../exceptions';

export default class MatchValidations {
  public static validateInProgressValue(value: string | null): void {
    if (value !== 'true' && value !== 'false') {
      throw new BadRequestException('Value must be "true" or "false"');
    }
  }
}
