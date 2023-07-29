import express, { Router } from 'express';
import { shortenUrlRouter } from './shortenUrl.route';

const router: Router = express.Router();

router.use('/shorten', shortenUrlRouter)

export { router as apiV1Routes };