import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemeter.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from './academicSemester.constants';

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Month,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Month,
      required: true,
    },
  },
  { timestamps: true },
);

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);
