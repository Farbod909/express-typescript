import express, { Router } from 'express';
import * as movementsController from '../controllers/movements.controller';

const router: Router = express.Router();

router.get('/', movementsController.movement_list);
router.get('/:id', movementsController.movement_detail);
router.post('/create', movementsController.movement_create);
router.post('/:id/update', movementsController.movement_update);
router.post('/:id/delete', movementsController.movement_delete);

export default router;
