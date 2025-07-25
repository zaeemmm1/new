import express from 'express';
import { auth } from "../../middlewares/authMiddleware.js";
import { createUser, loginUser, logoutUser, checkUser } from './authController.js';
import { loginValidationSchema, userValidationSchema } from './authValidation.js';
import validationMiddleWare from '../../middlewares/validationMiddleware.js';



const router = express.Router();


router
    .post('/signUp', validationMiddleWare(userValidationSchema), createUser)
    .post('/logIn', validationMiddleWare(loginValidationSchema), loginUser)
    .post('/logout', logoutUser)
    .get('/checkUser', auth, checkUser)


export default router;