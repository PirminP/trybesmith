import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const JWT_SECRET = 'secret';

const generateToken = (payload: User) => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

const verifyToken = (token: string) => {
  const data = jwt.verify(token, JWT_SECRET);
  return data;
};

export default { generateToken, verifyToken };