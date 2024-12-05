import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { UserService } from './user.service';

const createStudent = catchAsync(async (req, res) => {
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
});

const UserController = {
  createStudent,
};

export default UserController;
