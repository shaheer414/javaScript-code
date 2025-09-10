import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(
    name: string,
    email: string,
    password: string,
    role = 'user',
  ): Promise<User> {
    const createdUser = new this.userModel({ name, email, password, role });
    return createdUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async updateUser(
    userId: string,
    newName?: string,
    newEmail?: string,
    newRole?: string,
  ): Promise<User | null> {
    const updateData: Partial<User> = {};
    if (newName) updateData.name = newName;
    if (newEmail) updateData.email = newEmail;
    if (newRole) updateData.role = newRole;

    return this.userModel
      .findByIdAndUpdate(userId, updateData, { new: true })
      .exec();
  }
}
