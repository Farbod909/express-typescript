import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';

export function getAsyncHandler<RequestType, ResponseType>(
  handler: (request: RequestType) => Promise<ResponseType>,
  requestParser: (req: Request) => RequestType,
) {
  return asyncHandler(
    async (req: Request, res: Response, _next: NextFunction) => {
      const request: RequestType = requestParser(req);
      const response: ResponseType = await handler(request);
      res.status(200).json(response);
    },
  );
}
