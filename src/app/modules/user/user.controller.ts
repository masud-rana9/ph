import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodparsedData = userValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);
    // res.status(200).json({
    //   success: true,
    //   message: 'student created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'student created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(error);
  }
};

const UserController = {
  createStudent,
};

export default UserController;
