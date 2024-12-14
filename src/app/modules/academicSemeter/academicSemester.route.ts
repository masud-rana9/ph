import express from 'express';
import AcademicSemesterController from './academicSemester.controller';
import validationRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
// import { StudentController } from './student.controller';

const router = express.Router();
//will call controller
router.post(
  '/create-academic-semester',
  validationRequest(
    AcademicSemesterValidation.CreateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.CreateAcademicSemester,
);

// router.get('/', AcademicSemesterController.getAllAcademicSemester);

router.get(
  '/:semesterId',
  AcademicSemesterController.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validationRequest(
    AcademicSemesterValidation.UpdateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

// router.delete('/:studentId', AcademicSemesterController.deleteAcademicSemester);

export const AcademicSemesterRoutes = router;
