import { Document, Types } from 'mongoose';

export interface IShortenUrl extends Document {
    _id: Types.ObjectId;
    longUrl: string;
    shortCode: string;
    userId: Types.ObjectId;
}