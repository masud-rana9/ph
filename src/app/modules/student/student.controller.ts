import catchAsync from '../../../utils/catchAsync';
import { StudentService } from './student.service';
//import { Student } from './student.interface';

// const catchAsync = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((error) => next(error));
//   };
// };

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentService.getStudentFromDB();
  res.status(200).json({
    success: true,
    message: 'students Retrieved Successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentService.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'student is Retrieved Successfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentService.deleteStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Student deleted Successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
