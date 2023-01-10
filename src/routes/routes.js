import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const router = new Router();

router.post('/createTask', TaskController.createTask);
router.get('/', TaskController.home);

export default router;