import { gophishRequest } from './client.js';

async function createTemplate(input){
    const result = await gophishRequest('/api/templates/', {
        method: 'POST',
        body: JSON.stringify({
            name:       input.name,
            subject:    input.subject,
            html:       input.htmlBody,
            text:       input.textBody           
        }),
    });
    return result;
}

export { createTemplate };