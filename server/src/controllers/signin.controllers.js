import mongoose from "mongoose";
import { Usermodel } from "../modules/User.modules.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Signin = (req, res) => {
    console.log(req.body);
    const { email, password } = req.body

    Usermodel.findOne({ email: email }).then((response) => {
        if (!response) {
            res.status(400).json({ message: "Email is Envalid", data: "Email is Envalid" })
        } else {

            bcrypt.compare(password, response.password, (Error, result) => {
                console.log(result);
                if (result && (email === response.email)) {
                    const token = jwt.sign({ email: response.email }, process.env.PRIVATE_KEY, { expiresIn: '5s' })
                    console.log(token);
                    res.status(200).json({
                        message: "Login SuccessFully",
                        token: token,
                    })

                } else if (!result) {
                    res.status(400).json({
                        message: "Password is Invalid ",
                        data: "Password is Invalid ",
                    })
                }

            })
        }
    }).catch((error) => {
        res.json(error)
    })
}



