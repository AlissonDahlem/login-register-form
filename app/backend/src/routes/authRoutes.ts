import { Router } from 'express';
import AuthController from '../controllers/authController';

const loginController = new AuthController();

const router = Router();

router.post('/', (req, res, next) => loginController.login(req, res, next));
router.post('/:confirmationCode', (req, res, next) => loginController.validateAccont(req, res, next));

export default router;