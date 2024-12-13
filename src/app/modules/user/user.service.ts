import config from '../../config';
import { AcademicSemester } from '../academicSemeter/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error('user already exists');
  //   }

  //if password is not provided then use defaul;t password
  // create a user objects
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);
  //   if (!password) {
  //     user.password = config.default_password as string;
  //   } else {
  //     user.password = password;
  //   }

  //set student role
  userData.role = 'student';
  // manually set id

  const addmissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  userData.id = generateId(addmissionSemester);

  //create user
  const NewUser = await User.create(userData); //builtin static methods

  //create a student

  if (Object.keys(NewUser).length) {
    payload.id = NewUser.id;
    payload.user = NewUser._id;
    const newStudent = await Student.create(payload);
    return newStudent;
  }

  // const student = new Student(studentData); //Craete an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('user already exists');
  // }
  // const result = await student.save(); // builtin instance methods
};

export const UserService = {
  createStudentIntoDB,
};
