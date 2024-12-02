/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const NotFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({
    success: false,
    message: 'Route not found',
    error: 'Route not found',
  });
};

export default NotFound;
