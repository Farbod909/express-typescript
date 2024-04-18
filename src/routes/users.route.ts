import express, { Router } from 'express';
import * as usersController from '../controllers/users.controller';

const router: Router = express.Router();

router.get('/:id', usersController.user_detail);
router.post('/create', usersController.user_create);

export default router;
