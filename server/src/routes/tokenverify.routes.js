import { Router } from "express";
import { tokenverify } from "../controllers/tokenverify.controllers.js";

const router = Router()

router.route('/tokenverify').post(tokenverify)

export default router