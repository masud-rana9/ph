import { z } from 'zod';

const CreateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),

    academicFaculty: z.string({
      required_error: 'Academic Faculty is required',
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
});

export const AcademicDepartmentValidation = {
  CreateAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
