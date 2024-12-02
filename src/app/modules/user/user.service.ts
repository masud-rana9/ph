import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
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
  userData.id = '2030100001';

  //create user
  const NewUser = await User.create(userData); //builtin static methods

  //create a student

  if (Object.keys(NewUser).length) {
    studentData.id = NewUser.id;
    studentData.user = NewUser._id;
    const newStudent = await Student.create(studentData);
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
