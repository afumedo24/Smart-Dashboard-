import mongoose, { Document, Schema } from "mongoose";

// this interface is used to define the structure of the user object 
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export default mongoose.model<IUser>("User", UserSchema);
