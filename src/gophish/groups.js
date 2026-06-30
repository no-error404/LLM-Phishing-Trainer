import { gophishRequest } from './client.js';

async function createGroup(input){
    const result = await gophishRequest('/api/groups/', {
        method: 'POST',
        body: JSON.stringify({
            name: input.name,
            targets: input.targets.map( t => ({ 
                email: t.email,
                first_name: t.firstName,
                last_name: t.lastName,
                position: t.position
             }))
        })
    });
    return result;
}

export { createGroup };