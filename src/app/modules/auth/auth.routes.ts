import express from 'express';
import { AuthControllers } from './auth.controllers';

const authRouter = express.Router();
// Auth Login
authRouter.post('/login', AuthControllers.loginUser);
authRouter.get('/logout', AuthControllers.logoutUser);

export const AuthRouter = authRouter;
