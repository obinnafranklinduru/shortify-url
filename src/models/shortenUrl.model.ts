import { Schema, model } from 'mongoose';
import { IShortenUrl } from '../interfaces/shortenUrl.interface';

const shortenUrlSchema = new Schema({
    longUrl: {
        type: String,
        trim: true,
        required: true
    },
    shortCode: {
        type: String,
        trim: true,
        required: true 
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export const ShortenUrlModel = model<IShortenUrl>('ShortenUrl', shortenUrlSchema);