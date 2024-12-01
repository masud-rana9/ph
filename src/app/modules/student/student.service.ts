import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('user already exists');
  }
  const result = await Student.create(studentData); //builtin static methods

  // const student = new Student(studentData); //Craete an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('user already exists');
  // }
  // const result = await student.save(); // builtin instance methods
  return result;
};

const getStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([
    {
      $match: {
        id: id,
      },
    },
  ]);
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentService = {
  getStudentFromDB,
  getSingleStudentFromDB,
  createStudentIntoDB,
  deleteStudentFromDB,
};
