import express, { Router } from 'express';

import { shortenUrl, redirectUrl } from '../controllers/shortenUrl.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router: Router = express.Router();

router.post('/', isAuthenticated, shortenUrl);

router.get('/:code', isAuthenticated, redirectUrl);

export { router as shortenUrlRouter };