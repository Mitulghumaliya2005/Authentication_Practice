import mongoose from "mongoose";
import { Usermodel } from "../modules/User.modules.js";
import { response } from "express";
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'

// console.log("Controlles");

export const signup = async (req, res) => {
    const { email, password, name } = req.body

    bcrypt.hash(password, 10, (error, hash) => {
        const token = jwt.sign({ email: email }, process.env.PRIVATE_KEY, { expiresIn: '5s' })
        console.log("token is ", token);

        if (email.trim() === '') {
            res.json("Email is Not Found")
        } else if (!token) {
            res.json("TOken NOt Genrated by the server")
        } else {
            Usermodel.create({ email: email, name: name, password: hash, })
                .then((response) => {
                    console.log(response);
                    Usermodel.find().then((response) => {
                        // console.log(response);
                        res.status(200).json({
                            message: "User SignUp SuccessFully",
                            token: token,
                        })
                        // res.this.state.(response)
                    })
                }).catch((error) => {
                    res.json(error)
                })
        }
    })

}