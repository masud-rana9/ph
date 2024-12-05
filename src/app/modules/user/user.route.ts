import express, { NextFunction, Request, Response } from 'express';
import UserController from './user.controller';

import { AnyZodObject } from 'zod';
import { StudentValidationSchemas } from '../student/student.validation';

const router = express.Router();

const validationRequest = (Schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //validation
    try {
      await Schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };
};

//will call controller
router.post(
  '/create-student',
  validationRequest(StudentValidationSchemas.StudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
