// src/app.js
//
// RESPONSIBILITY: Configure the Express application.
// This file must NOT call app.listen().
// It must export the configured app.

import express from 'express';
import morgan from 'morgan';

// [A1] Import your health router once you create it
import healthRouter from './routes/health.routes.js';

const app = express();

// [A2] Register the JSON body parser middleware
app.use(express.json());

// [A3] Register a simple request logger
// Log: METHOD /path  e.g. "GET /health"
// Hint: app.use((req, res, next) => { ... })
app.use(morgan(':date :method :url :status :response-time ms'));

// [A4] Mount the health router at /health
app.use('/health', healthRouter);

// [A5] Register a catch-all error handler
// Remember: error handlers take (err, req, res, next)
// It should return HTTP 500 with { error: err.message }
app.use((err, req, res, next) => { 
    console.error(err.message);
    res.status(500).json({ error: err.message });
});

// [A6] Export the app
export default app;

