import { RequestHandler } from 'express';
import UserService from '../services/userService';

export default class UserController {
  private _userService: UserService;

  constructor(){
    this._userService = new UserService();
  }
  public createUser:RequestHandler = async (req, res): Promise<void> => {
    const { firstName, lastName, email, password } = req.body;
    
    await this._userService.createUser(firstName, lastName, email, password);
    res.status(201).json({ok: true})
  };
};
