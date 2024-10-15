import { Router } from 'express'
import { signup } from '../controllers/signup.controllers.js'

const routes = Router()

routes.route("/signup").post(signup)
// console.log("Routes");

export default routes