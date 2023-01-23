import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddleware';

const userController = new UserController(new UserService());

const router = Router();

router.post('/login', (req, res, next) => userController.login(req, res, next));
router.get(
  '/login/validate',
  authMiddleware,
  (req, res, next) => userController.getRole(req, res, next),
);

export default router;
