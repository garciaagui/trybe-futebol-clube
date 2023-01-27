import { Router } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController(new LeaderboardService());

const router = Router();

router.get('/home', (req, res, next) =>
  leaderboardController.getHomeGamesStadings(req, res, next));

export default router;
