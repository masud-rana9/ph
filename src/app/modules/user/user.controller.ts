// import { UserServices } from './user.service';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;
//     // const zodparsedData = userValidationSchema.parse(studentData);

//     const result = await UserServices.createStudentIntoDB(studentData);
//     res.status(200).json({
//       success: true,
//       message: 'student created successfully',
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'something went wrong',
//       error: error,
//     });
//   }
// };

// export const StudentController = {
//   createStudent,
// };
