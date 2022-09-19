import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;
    const createToken = await this.userService.createUser(user);
    res.status(201).json({ token: createToken });
  };
}

export default UserController;