import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';

const userController = new UserController(new UserService());

const router = Router();

router.post('/login', (req, res, next) => userController.login(req, res, next));

export default router;
