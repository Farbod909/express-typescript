import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';

const movement_list = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    res.send('NOT IMPLEMENTED: LIST');
  },
);

const movement_detail = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    res.send('NOT IMPLEMENTED: DETAIL');
  },
);

const movement_create = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    res.send('NOT IMPLEMENTED: CREATE');
  },
);

const movement_update = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    res.send('NOT IMPLEMENTED: UPDATE');
  },
);

const movement_delete = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    res.send('NOT IMPLEMENTED: DELETE');
  },
);

export {
  movement_list,
  movement_detail,
  movement_create,
  movement_update,
  movement_delete,
};
