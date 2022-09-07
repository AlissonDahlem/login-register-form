import Users from '../database/models/UserModel';
import { compare } from 'bcryptjs';

export default class AuthService {
  public validadeUserActived = async (email: string) => {
    const user = await Users.findOne({where: { email }}) as Users;

    if (!user) {
      const error = new Error('A user with this email does not exist')
      error.name = 'notFound'
      throw error;
    }
    if (user.confirmed === false) {
      const error = new Error('You need to validate your accont, please check your email')
      error.name = 'unauthorized'
      throw error;
    }
  }

  public login = async(email: string, password: string) => {
    const user = await Users.findOne({
      where: { email },
    }) || { password: '' };

    const comparePassword = await compare(password, user.password);

    if (!user || !comparePassword) {
      const error = new Error('Incorrect email or password');
      error.name = 'Unauthorized';
      throw error;
    }
    await this.validadeUserActived(email);
  }

  public validateAccont = async(confirmationCode: string) => {
    await Users.update({ confirmed: true }, { where: { confirmationCode } })
  }
}