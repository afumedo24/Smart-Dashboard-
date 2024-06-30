import mongoose, { Document, Schema } from "mongoose";

// this interface is used to define the structure of the user object 
// it also extends the Document interface from mongoose
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

// this is the schema for the user object
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export default mongoose.model<IUser>("User", UserSchema);
