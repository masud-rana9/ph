import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import AcademicDepartmentController from './academicDepartment.controller';

const router = express.Router();
//will call controller
router.post(
  '/create-academic-department',
  validationRequest(
    AcademicDepartmentValidation.CreateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.CreateAcademicDepartmentIntoDB,
);

// router.get('/', AcademicSemesterController.getAllAcademicSemester);

router.get(
  '/:departmentId',
  AcademicDepartmentController.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validationRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

// router.delete('/:studentId', AcademicSemesterController.deleteAcademicSemester);

export const AcademicDepartmentRoutes = router;
