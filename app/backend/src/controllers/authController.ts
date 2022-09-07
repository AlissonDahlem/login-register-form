import { RequestHandler } from 'express';
import AuthService from '../services/authService';

export default class AuthController {
  private _authService: AuthService;

  constructor(){
    this._authService = new AuthService();
  }

  public login:RequestHandler = async (req, res): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('caiu no erro');
      const error = new Error('All fields must be filled');
      error.name = 'missingFields';
      throw error;
    }

    const token = await this._authService.login(email, password);

    res.status(200).json({ok: true})
  }

  public validateAccont:RequestHandler = async (req, res): Promise<void> => {
    const { confirmationCode } = req.params

    await this._authService.validateAccont(confirmationCode)
    res.status(200).json({ok: 'confirmed'})
  }
}