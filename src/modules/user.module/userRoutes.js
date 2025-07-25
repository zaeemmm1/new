import express from "express"
import { auth } from "../../middlewares/authMiddleware.js";
import { getAllUsers, getMyProfile } from './userController.js'

const router = express.Router()

router
    .get('/allUsers', auth,  getAllUsers)
    .get('/myProfile', auth, getMyProfile)

export default router;

