import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { AcademicFacultyService } from './academicFaculty.service';
//import { AcademicSemesterService } from './academicSemester.service';
// import { UserService } from './user.service';

const CreateAcademicFaculty = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;
  // const zodparsedData = userValidationSchema.parse(studentData);

  const result = await AcademicFacultyService.CreateAcademicFacultyIntoDB(
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
    message: 'Academic Faculty created successfully',
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFacultyIntoDB;
  res.status(200).json({
    success: true,
    message: 'Academic Faculty Retrieved Successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicFacultyService.getSingleAcademicFacultyIntoDB(id);
  res.status(200).json({
    success: true,
    message: 'Academic Faculty is Retrieved Successfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.updateAcademicFacultyIntoDB(
    id,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'Academic Faculty is Updated Successfully',
    data: result,
  });
});

const AcademicFacultyController = {
  CreateAcademicFaculty,
  getSingleAcademicFaculty,
  getAllAcademicFaculty,
  updateAcademicFaculty,
};

export default AcademicFacultyController;
