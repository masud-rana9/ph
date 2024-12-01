// import { model, Schema } from 'mongoose';
// import { TUser } from './user.interface';

// const userSchema = new Schema<TUser>(
//   {
//     id: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     needspasswordchange: {
//       type: Boolean,
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ['student', 'faculty', 'admin'],
//       required: true,
//     },
//     satus: {
//       type: String,
//       enum: ['inprogress', 'blocked'],
//       default: 'inprogress',
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true },
// );
// export const User = model<TUser>('User', userSchema);
