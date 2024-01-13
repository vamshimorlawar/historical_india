import mongoose, { Schema, model, Document } from "mongoose";

interface UserDocument extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const userSchema = new Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.User || model<UserDocument>("User", userSchema);
