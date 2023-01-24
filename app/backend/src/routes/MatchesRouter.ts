import { Router } from 'express';
import MatchService from '../services/MatchService';
import MatchController from '../controllers/MatchController';
import authMiddleware from '../middlewares/authMiddleware';

const matchController = new MatchController(new MatchService());

const router = Router();

router.get('/', (req, res, next) => matchController.getAll(req, res, next));
router.post('/', authMiddleware, (req, res, next) => matchController.create(req, res, next));

export default router;
