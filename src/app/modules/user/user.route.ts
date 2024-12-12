import express from 'express';
import UserController from './user.controller';

import { StudentValidationSchemas } from '../student/student.validation';
import validationRequest from '../../middlewares/validateRequest';

const router = express.Router();

//will call controller
router.post(
  '/create-student',
  validationRequest(StudentValidationSchemas.StudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
