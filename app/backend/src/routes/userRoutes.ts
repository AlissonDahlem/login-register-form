import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

router.post('/', (req, res, next) => userController.createUser(req, res, next))

export default router;