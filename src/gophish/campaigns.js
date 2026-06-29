import { gophishRequest } from './client.js';

async function createCampaign(input){
    const result = await gophishRequest('/api/campaigns/', {
            method: 'POST',
            body: JSON.stringify({
                    name:             input.name,
                    template:         { name: input.templateName },
                    page:             { name: input.landingPageName },
                    groups:           [{ name: input.groupName }],
                    smtp:             { name: input.sendingProfileName },
                    url:              input.publicUrl,
                    launch_date:      new Date().toISOString()
});
    });
    return result;
}

export { createCampaign };