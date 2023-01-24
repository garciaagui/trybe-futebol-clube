import { Router } from 'express';
import TeamService from '../services/TeamService';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController(new TeamService());

const router = Router();

router.get('/', (req, res, next) => teamController.getAll(req, res, next));

export default router;
