export type TLoginUser = {
  email: string;
  password: string;
};
/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  isExistUserByEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
 