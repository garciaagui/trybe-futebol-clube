import statusCodes from '../utils/statusCodes';
import HttpException from './HttpException';

export default class UnprocessableException extends HttpException {
  private static status = statusCodes.unprocessable;

  constructor(message: string) {
    super(UnprocessableException.status, message);
  }
}
