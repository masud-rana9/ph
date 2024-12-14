import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicSemester.validation';
import AcademicFacultyController from './academicFaculty.controller';

const router = express.Router();
//will call controller
router.post(
  '/create-academic-faculty',
  validationRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.CreateAcademicFaculty,
);

// router.get('/', AcademicSemesterController.getAllAcademicSemester);

router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validationRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.updateAcademicFaculty,
);

// router.delete('/:studentId', AcademicSemesterController.deleteAcademicSemester);

export const AcademicFacultyRoutes = router;
