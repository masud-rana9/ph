import { TAcademicSemester } from '../academicSemeter/academicSemeter.interface';
import { User } from './user.model';

const findLastStudent = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateId = async (payload: TAcademicSemester) => {
  let CurrentId = (0).toString();

  const lastStudentId = await findLastStudent();
  const lastStudentsemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(2, 4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;

  if (
    lastStudentId &&
    lastStudentsemesterCode == currentSemesterCode &&
    lastStudentYear == currentYear
  ) {
    CurrentId = lastStudentId.substring(6);
  }
  let incrementId = (Number(CurrentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
