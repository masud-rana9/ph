import { AcademicSemester } from './academicSemester.model';
import { TAcademicSemester } from './academicSemeter.interface';

const CreateAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  type AcademicSemesternameCodeMapper = {
    [key: string]: string;
  };

  const academicSemesterNameCodeMapper: AcademicSemesternameCodeMapper = {
    Autum: '01',
    Summer: '02',
    Fall: '03',
  };

  if (academicSemesterNameCodeMapper[payload.name] === payload.code) {
    throw new Error('Academic Semester code already exists');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemesterIntoDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};
const deleteAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemester.findByIdAndDelete(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  type AcademicSemesternameCodeMapper = {
    [key: string]: string;
  };

  const academicSemesterNameCodeMapper: AcademicSemesternameCodeMapper = {
    Autum: '01',
    Summer: '02',
    Fall: '03',
  };

  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] === payload.code
  ) {
    throw new Error('Please provide all the required fields');
  }
  const result = await AcademicSemester.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterService = {
  CreateAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getSingleAcademicSemesterIntoDB,
  deleteAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
};
