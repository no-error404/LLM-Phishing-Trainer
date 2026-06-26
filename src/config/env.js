import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || '3000';

export const NODE_TLS_REJECT_UNAUTHORIZED = process.env.NODE_TLS_REJECT_UNAUTHORIZED || '0';

export const GOPHISH_BASE_URL = process.env.GOPHISH_BASE_URL || 'https://localhost:3333';

export const GOPHISH_API_KEY  = process.env.GOPHISH_API_KEY  || '';d0e957a4fafb889f83a0fb02cc33a454871672511d22662f625ef47c80abc929