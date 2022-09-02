import { encodeBase64, compare } from 'bcryptjs';
import Users from '../database/models/UserModel';
import PasswordValidator = require('password-validator');

export default class UserService {
  public validateEmailExists = async (email: string) => {
    const user = await Users.findOne({where: {email}}) as Users
    if( user ) {
      const error = new Error('Email already exists');
      error.name = 'conflict'
      throw error;
    }
  }

  public validatePassword = async (password: string) => {
    const schema = new PasswordValidator();

    schema
    .is().min(6)
    .is().max(25)
    .is().uppercase(1)
    .is().digits(3)
    .is().symbols(1);

    const [verifiedPassword] = schema.validate(password, { details: true });
    if ( !!verifiedPassword ) {
      const error = new Error(verifiedPassword.message)
      error.name = 'conflict';
      throw error
    }
    return verifiedPassword;
  }

  public createUser = async (firstName: string, lastName: string, email: string, password: string) => {
    const validateEmail = await this.validateEmailExists(email);
    const validatedPassword = await this.validatePassword(password)
    await Users.create({
      firstName,
      lastName,
      email,
      password,
      role: 'user'
    })
  }
}