import express from 'express';
import { auth } from '../../middlewares/authMiddleware.js'
import { messageValidationSchema } from './messageValidation.js';
import validationMiddleWare from '../../middlewares/validationMiddleware.js';
import { sendMessage, getMessages , getUserConversations } from './messageController.js';


const router = express.Router()

router
    .get('/getAllConvo/', auth, getUserConversations)
    .get('/getMessage/:userToChatId', auth, getMessages)
    .post('/send/:receiverId', auth, validationMiddleWare(messageValidationSchema), sendMessage)


export default router;