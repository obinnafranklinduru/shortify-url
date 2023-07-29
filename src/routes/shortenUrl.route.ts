import express, { Router } from 'express';
import { shortenUrl, redirectUrl } from '../controllers/shortenUrl.controller';

const router: Router = express.Router();

router.post('/', shortenUrl);

router.get('/:code', redirectUrl);

export { router as shortenUrlRouter };