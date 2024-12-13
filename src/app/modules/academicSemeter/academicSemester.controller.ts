import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';
// import { UserService } from './user.service';

const CreateAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;
  // const zodparsedData = userValidationSchema.parse(studentData);

  const result = await AcademicSemesterService.CreateAcademicSemesterIntoDB(
    req.body,
  );
  // res.status(200).json({
  //   success: true,
  //   message: 'student created successfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

// const getAllAcademicSemester = catchAsync(async (req, res) => {

//   const result = await AcademicSemesterService.getAcademicSemesterFromDB();
//   res.status(200).json({
//     success: true,
//     message: 'Academic Semester Retrieved Successfully',
//     data: result,
//   });
// });

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicSemesterService.getSingleAcademicSemesterFromDB(id);
  res.status(200).json({
    success: true,
    message: 'Academic Semester is Retrieved Successfully',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterService.updateAcademicSemesterFromDB(
    id,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'Academic Semester is Updated Successfully',
    data: result,
  });
});

const AcademicSemesterController = {
  CreateAcademicSemester,
  getSingleAcademicSemester,

  updateAcademicSemester,
};

export default AcademicSemesterController;
