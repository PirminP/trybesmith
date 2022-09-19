import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import Token from '../validation/token';

class UserService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: User): Promise<string> {
    const create = await this.model.createUser(user);
    const token = Token.generateToken(create);
    return token;
  }
}

export default UserService;