import { Model, Types } from 'mongoose';

//for student guardian
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

//for student username
export type TUsername = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

//for student localgurdian
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

//for student
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUsername;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  avatar?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profieImg: string;
  admissionSemester: Types.ObjectId;
  isDeleted: boolean;
};

//for cerating static methods
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<Partial<TStudent> | null>;
}

//for creating instance

// export type StudentMethods = {
//   isUserExists: (id: string) => Promise<Partial<TStudent> | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
