import { AcademicFaculty } from './academicFaculty.model';
import { TAcademicFaculty } from './academicFuculty.interface';

const CreateAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyIntoDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyIntoDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const deleteAcademicFacultyIntoDB = async (id: string) => {
  const result = await AcademicFaculty.findByIdAndDelete(id);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  CreateAcademicFacultyIntoDB,
  getAllAcademicFacultyIntoDB,
  getSingleAcademicFacultyIntoDB,
  deleteAcademicFacultyIntoDB,
  updateAcademicFacultyIntoDB,
};
