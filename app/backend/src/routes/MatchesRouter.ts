import { Router } from 'express';
import MatchService from '../services/MatchService';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController(new MatchService());

const router = Router();

router.get('/', (req, res, next) => matchController.getAll(req, res, next));

export default router;
