import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type : String,required: true },
    email: { type : String,required: true },
    password: { type : String,select: false },
    // isAdmin: { type : Boolean,required: true,default:false },
googleId : {type: String},
image : {type: String}
});

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
