import express from 'express';
import UserController from './user.controller';

const router = express.Router();
//will call controller
router.post('/create-student', UserController.createStudent);

export const UserRoutes = router;
