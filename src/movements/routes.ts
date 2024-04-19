import express, { NextFunction, Router, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { getAsyncHandler } from '../common/handlerGeneric';
import * as handlerInterfaces from './interface';
import movementListHandler from './handlers/movementListHandler';
import movementDetailHandler from './handlers/movementDetailHandler';
import movementCreateHandler from './handlers/movementCreateHandler';
import movementUpdateHandler from './handlers/movementUpdateHandler';
import movementDeleteHandler from './handlers/movementDeleteHandler';
import parseMovementDetailRequest from './request-parsers/movementDetailRequestParser';
import parseMovementListRequest from './request-parsers/movementListRequestParser';
import parseMovementCreateRequest from './request-parsers/movementCreateRequestParser';
import parseMovementUpdateRequest from './request-parsers/movementUpdateRequestParser';
import parseMovementDeleteRequest from './request-parsers/movementDeleteRequestParser';

const router: Router = express.Router();

router.get(
  '/',
  getAsyncHandler<
    handlerInterfaces.MovementListRequest,
    handlerInterfaces.MovementListResponse
  >(movementListHandler, parseMovementListRequest),
);

router.get(
  '/:id',
  getAsyncHandler<
    handlerInterfaces.MovementDetailRequest,
    handlerInterfaces.MovementDetailResponse
  >(movementDetailHandler, parseMovementDetailRequest),
);

router.post(
  '/create',
  getAsyncHandler<
    handlerInterfaces.MovementCreateRequest,
    handlerInterfaces.MovementCreateResponse
  >(movementCreateHandler, parseMovementCreateRequest),
);

router.post(
  '/:id/update',
  getAsyncHandler<
    handlerInterfaces.MovementUpdateRequest,
    handlerInterfaces.MovementUpdateResponse
  >(movementUpdateHandler, parseMovementUpdateRequest),
);

router.post(
  '/:id/delete',
  getAsyncHandler<
    handlerInterfaces.MovementDeleteRequest,
    handlerInterfaces.MovementDeleteResponse
  >(movementDeleteHandler, parseMovementDeleteRequest),
);

export default router;
