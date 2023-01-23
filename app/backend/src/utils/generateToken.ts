import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY:jwt.Secret = process.env.JWT_SECRET as string;

export default (userId: number): string => {
  const payload = { userId };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '6h', algorithm: 'HS256' });

  return token;
};
