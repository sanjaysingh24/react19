import express from 'express';
import { createuser } from '../controllers/user-controllers.js';
export const userRouter = express.Router();

userRouter.post('/create',createuser)

