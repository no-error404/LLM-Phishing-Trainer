// src/server.js
//
// RESPONSIBILITY: Start the HTTP server.
// This is the only file that calls listen().

// [B1] Import app and PORT
// YOUR CODE HERE
import app from './app.js';
import { PORT } from './config/env.js';


// [B2] Call app.listen() and log the port
// YOUR CODE HERE
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});