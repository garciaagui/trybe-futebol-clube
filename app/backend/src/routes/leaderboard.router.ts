import { Router } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardController = new LeaderboardController(new LeaderboardService());

const router = Router();

router.get('/', (req, res, next) =>
  leaderboardController.getGeneralStandings(req, res, next));

router.get('/home', (req, res, next) =>
  leaderboardController.getHomeStandings(req, res, next));

router.get('/away', (req, res, next) =>
  leaderboardController.getAwayStandings(req, res, next));

export default router;
