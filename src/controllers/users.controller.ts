import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';

import User, { newUser, getUserById } from '../models/user.model';

const user_detail = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const user: User = await getUserById(req.params.id);
    res.send(user);
  },
);

const user_create = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const user: User = await newUser(
      req.body.email,
      req.body.password,
      req.body.firstName,
      req.body.lastName,
    );
    res.send(user);
  },
);

export { user_detail, user_create };
