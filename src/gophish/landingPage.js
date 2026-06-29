import { gophishRequest } from './client.js';

async function createLandingPage(input){
    const result = await gophishRequest('/api/pages/', {
        method: 'POST',
        body: JSON.stringify({
            name: input.name,
            html: input.html,
            capture_credentials: false,
            capture_passwords: false
        })
    });
    return result;
}

export { createLandingPage };