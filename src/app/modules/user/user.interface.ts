export type TUser = {
  id: string;
  password: string;
  needspasswordchange: boolean;
  role: string;
  satus: 'inprogress' | 'blocked';
  isDeleted: boolean;
};

// export type NewUser = {
//   password: string;
//   role: string;
//   id: string;
// };
