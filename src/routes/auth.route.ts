import express, { Router } from 'express';

import { loginWithGoogle, googleCallback, logout } from '../controllers/auth.controller';

const router: Router = express.Router();

router.get('/login', loginWithGoogle);

router.get('/google/callback', googleCallback);

router.get('/logout', logout);

export { router as authRouter };