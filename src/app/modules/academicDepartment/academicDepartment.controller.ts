import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { AcademicDepartmentService } from './academicDepartment.service';

//import { AcademicSemesterService } from './academicSemester.service';
// import { UserService } from './user.service';

const CreateAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;
  // const zodparsedData = userValidationSchema.parse(studentData);

  const result = await AcademicDepartmentService.CreateAcademicDepartmentIntoDB(
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
    message: 'Academic Department created successfully',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.getAllAcademicDepartmentIntoDB;
  res.status(200).json({
    success: true,
    message: 'Academic Department Retrieved Successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentService.getSingleAcademicDepartmentIntoDB(id);
  res.status(200).json({
    success: true,
    message: 'Academic Department is Retrieved Successfully',
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicDepartmentService.updateAcademicDepartmentIntoDB(
    id,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'Academic Faculty is Updated Successfully',
    data: result,
  });
});

const AcademicDepartmentController = {
  CreateAcademicDepartmentIntoDB,
  getSingleAcademicDepartment,
  getAllAcademicDepartment,
  updateAcademicDepartment,
};

export default AcademicDepartmentController;
