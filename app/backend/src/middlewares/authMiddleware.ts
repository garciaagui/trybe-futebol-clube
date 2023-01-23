import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import statusCodes from '../utils/statusCodes';

const SECRET_KEY:jwt.Secret = process.env.JWT_SECRET as string;

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) return res.status(statusCodes.unauthorized).json({ message: 'Token not found' });

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    req.body.user = payload;
    next();
  } catch (err) {
    return res.status(statusCodes.unauthorized).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
