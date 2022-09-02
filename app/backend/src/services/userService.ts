import * as bcrypt from 'bcryptjs'
// import { encodeBase64, compare, hash } from 'bcryptjs';
import Users from '../database/models/UserModel';
import PasswordValidator = require('password-validator');
import * as EmailValidator from 'email-validator'

export default class UserService {
  public validateEmailExists = async (email: string) => {
    const user = await Users.findOne({where: {email}}) as Users
    if (user) {
      const error = new Error('Email already exists');
      error.name = 'conflict'
      throw error;
    }
    const validateEmail = EmailValidator.validate(email);
    if (!validateEmail) {
      const error = new Error('Email must be valid')
      error.name = 'missingFields'
      throw error
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
      error.name = 'missingFields';
      throw error
    }
  }

  public encriptPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash
  }

  public createUser = async (firstName: string, lastName: string, email: string, password: string) => {
    await this.validateEmailExists(email);
    await this.validatePassword(password)
    const encripted = this.encriptPassword(password)
    await Users.create({
        firstName,
        lastName,
        email,
        password: encripted,
        roleId: '1'
      })
  }
}