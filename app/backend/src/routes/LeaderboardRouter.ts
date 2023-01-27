import { Router } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController(new LeaderboardService());

const router = Router();

router.get('/', (req, res, next) =>
  leaderboardController.getGeneralStandings(req, res, next));

router.get('/home', (req, res, next) =>
  leaderboardController.getHomeStandings(req, res, next));

router.get('/away', (req, res, next) =>
  leaderboardController.getAwayStandings(req, res, next));

export default router;
