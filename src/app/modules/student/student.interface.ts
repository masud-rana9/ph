//for student guardian
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

//for student username
export type Username = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

//for student localgurdian
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

//for student
export type Student = {
  id: string;
  name: Username;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  avatar?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profieImg: string;
  isActive: 'active' | 'blocked';
};
