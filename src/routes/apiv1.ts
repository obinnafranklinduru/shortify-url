import express, { Router } from 'express';

import { authRouter } from './auth.route';
import { shortenUrlRouter } from './shortenUrl.route';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/shorten', shortenUrlRouter)

router.get('/shorten', (req, res) => res.send('h1'))

export { router as apiV1Routes };