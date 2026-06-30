import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || '3000';

export const NODE_TLS_REJECT_UNAUTHORIZED = process.env.NODE_TLS_REJECT_UNAUTHORIZED || '0';

export const GOPHISH_BASE_URL = process.env.GOPHISH_BASE_URL || 'https://localhost:3333';

export const GOPHISH_API_KEY  = process.env.GOPHISH_API_KEY  || '';

export const GOPHISH_PUBLIC_URL = process.env.GOPHISH_PUBLIC_URL || 'http://localhost:8080';