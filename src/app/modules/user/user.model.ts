import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needspasswordchange: {
      type: Boolean,
      required: true,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
      required: true,
    },
    satus: {
      type: String,
      enum: ['inprogress', 'blocked'],
      default: 'inprogress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

//pree middleware

userSchema.pre('save', async function (next) {
  // console.log(this, 'pre middleware called');
  //Hassing password
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//post middleware

userSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});
export const User = model<TUser>('User', userSchema);
