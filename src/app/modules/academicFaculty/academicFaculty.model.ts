import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFuculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
