import { Router } from 'express';
import TeamService from '../services/team.service';
import TeamController from '../controllers/team.controller';

const teamController = new TeamController(new TeamService());

const router = Router();

router.get('/', (req, res, next) => teamController.getAll(req, res, next));
router.get('/:id', (req, res, next) => teamController.getById(req, res, next));

export default router;
