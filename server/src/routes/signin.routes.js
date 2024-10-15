import { Router }  from 'express'
import { Signin } from '../controllers/signin.controllers.js'

const routes = Router()

routes.route("/signin").post(Signin)

export default routes