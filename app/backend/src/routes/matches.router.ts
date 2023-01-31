import { Router } from 'express';
import MatchService from '../services/match.service';
import MatchController from '../controllers/match.controller';
import authMiddleware from '../middlewares/authMiddleware';

const matchController = new MatchController(new MatchService());

const router = Router();

router.get('/', (req, res, next) => matchController.getAll(req, res, next));
router.post('/', authMiddleware, (req, res, next) => matchController.create(req, res, next));
router.patch(
  '/:id',
  (req, res, next) => matchController.updateScore(req, res, next),
);
router.patch(
  '/:id/finish',
  (req, res, next) => matchController.updateInProgressStatus(req, res, next),
);

export default router;
