import express, { Router } from 'express';
import * as movementController from '../controllers/movementController';

const router: Router = express.Router();

router.get('/', movementController.movement_list);
router.get('/:id', movementController.movement_detail);
router.post('/create', movementController.movement_create);
router.post('/:id/update', movementController.movement_update);
router.post('/:id/delete', movementController.movement_delete);

export default router;