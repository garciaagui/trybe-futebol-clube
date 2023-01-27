import { ErrorRequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
  // res.status(status).json({ message });
};

export default errorMiddleware;
