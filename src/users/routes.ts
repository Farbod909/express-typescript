import express, { NextFunction, Request, Response, Router } from 'express';

import * as handlerInterfaces from './interface';
import userDetailHandler from './handlers/userDetailHandler';
import userCreateHandler from './handlers/userCreateHandler';
import { getAsyncHandler } from '../common/handlerGeneric';
import parseUserDetailRequest from './request-parsers/userDetailRequestParser';
import parseUserCreateRequest from './request-parsers/userCreateRequestParser';

const router: Router = express.Router();

router.get(
  '/:id',
  getAsyncHandler<
    handlerInterfaces.UserDetailRequest,
    handlerInterfaces.UserDetailResponse
  >(userDetailHandler, parseUserDetailRequest),
);

router.post(
  '/create',
  getAsyncHandler<
    handlerInterfaces.UserCreateRequest,
    handlerInterfaces.UserCreateResponse
  >(userCreateHandler, parseUserCreateRequest),
);

export default router;
