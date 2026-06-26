// src/gophish/client.js
// RESPONSIBILITY: Single reusable wrapper for all GoPhish API calls.
// No other file calls fetch() directly.

import { GOPHISH_BASE_URL, GOPHISH_API_KEY } from '../config/env.js';

async function gophishRequest(path, options = {}) {

  // D2 — build full URL from base + path
  const url = `${GOPHISH_BASE_URL}${path}`;

  // D3 — call fetch with auth headers baked in
  const response = await fetch(url, {
    ...options,                              // caller can pass method, body, etc.
    headers: {
      'Content-Type': 'application/json',   // we always send JSON
      'Authorization': `Bearer ${GOPHISH_API_KEY}`, // auth required by GoPhish
      ...options.headers,                   // caller can add/override headers ✅
    },
  });

  // D4 — treat non-2xx as an error with useful context
  if (!response.ok) {
    throw new Error(
      `GoPhish API error: ${response.status} ${response.statusText} — ${path}`
    );
  }

  return await response.json();             // parse and return response body
}

// D5 — named export so callers import exactly what they need
export { gophishRequest };