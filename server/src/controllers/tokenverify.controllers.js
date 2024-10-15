import mongoose from "mongoose";
import { Usermodel } from "../modules/User.modules.js";
import jwt from "jsonwebtoken"

export const tokenverify = (req, res) => {
    // console.log("tokenverify");
    console.log(req.body.token);

    const userinformations = jwt.verify(req.body.token, process.env.PRIVATE_KEY)
    console.log(userinformations);

    Usermodel.findOne({ email: userinformations.email }).then((response) => {
        console.log(response);
        res.json(response)
    }).catch((error) => {
        console.log(error);

    })


}