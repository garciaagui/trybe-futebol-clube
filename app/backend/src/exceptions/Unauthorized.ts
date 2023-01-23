import statusCodes from '../utils/statusCodes';
import HttpException from './HttpException';

export default class UnauthorizedException extends HttpException {
  private static status = statusCodes.unauthorized;

  constructor(message: string) {
    super(UnauthorizedException.status, message);
  }
}
