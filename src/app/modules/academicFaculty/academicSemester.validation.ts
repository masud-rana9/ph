import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
});
const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
});

export const AcademicFacultyValidation = {
  academicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
