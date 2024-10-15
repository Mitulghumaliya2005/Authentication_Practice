import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

export const Usermodel = mongoose.model("Usermodel", UserSchema)