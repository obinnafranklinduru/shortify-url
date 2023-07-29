import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { ShortenUrlModel } from '../models/shortenUrl.model';
import { shortIdGenerator } from '../utils/shortIdGenerator';
import { isValidUrl } from '../utils/validateUrl';
import { ErrorResponse } from '../utils/errorResponse';
import { normalizeUrl } from '../utils/normalizeUrl';

const BASE_URL = process.env.BASE_URL || 'https://localhost:3000'

export async function shortenUrl(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const longUrl: string = req.body.longUrl;

    if (!isValidUrl(longUrl))
      return next(new ErrorResponse('Invalid longUrl. Please provide a valid URL.', 400));

    const normalizedUrl = normalizeUrl(longUrl);

    const shortCode: string = shortIdGenerator.generate();

    await ShortenUrlModel.create({
      longUrl: normalizedUrl,
      shortCode,
    });

    res.status(201).json({ shortUrl: `${BASE_URL}/v1/shorten/${shortCode}` });
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
}

export async function redirectUrl(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const code = req.params.code;
  
    const urlEntry = await ShortenUrlModel.findOne({ shortCode: code });

    if (!urlEntry) return next(new ErrorResponse('URL not found', 404));

    res.status(301).redirect(urlEntry.longUrl);
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
}