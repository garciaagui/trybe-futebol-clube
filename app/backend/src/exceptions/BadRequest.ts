import statusCodes from '../utils/statusCodes';
import HttpException from './HttpException';

export default class BadRequestException extends HttpException {
  private static status = statusCodes.badRequest;

  constructor(message: string) {
    super(BadRequestException.status, message);
  }
}
