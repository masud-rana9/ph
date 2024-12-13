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

router.get('/:studentId', AcademicSemesterController.getSingleAcademicSemester);

router.patch(
  '/:studentId',
  validationRequest(
    AcademicSemesterValidation.UpdateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

// router.delete('/:studentId', AcademicSemesterController.deleteAcademicSemester);

export const AcademicSemesterRoutes = router;
