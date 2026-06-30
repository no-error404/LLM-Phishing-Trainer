// src/services/campaignLauncher.js

import { createTemplate }     from '../gophish/templates.js';
import { createLandingPage }  from '../gophish/landingPages.js';
import { createGroup }        from '../gophish/groups.js';
import { createCampaign }     from '../gophish/campaigns.js';
import { GOPHISH_PUBLIC_URL } from '../config/env.js';

async function launchStaticTrainingCampaign() {

  const templateInput = {
    name:     'Training Email Template',
    subject:  'Security Training Exercise',
    htmlBody: '<p>This is a <strong>training</strong> email.</p><p>Click here: {{.URL}}</p>',
    textBody: 'This is a training email. Click here: {{.URL}}'
  };
  const emailTemplate = await createTemplate(templateInput);

  const landingPageInput = {
    name: 'Training Landing Page',
    html: '<h1>Training Simulation</h1><p>You have been selected for a security training exercise.</p>'
  };
  const landingPage = await createLandingPage(landingPageInput);

  const groupInput = {
    name: 'Training Group',
    targets: [
      {
        email:     'alice@example.test',
        firstName: 'Alice',
        lastName:  'Smith',
        position:  'Employee'
      }
    ]
  };
  const group = await createGroup(groupInput);

  const campaignInput = {
    name:               'Training Campaign',
    templateName:       emailTemplate.name,
    landingPageName:    landingPage.name,
    groupName:          group.name,
    sendingProfileName: 'MailHog',
    publicUrl:          GOPHISH_PUBLIC_URL
  };
  const campaign = await createCampaign(campaignInput);

  return campaign;
}

export { launchStaticTrainingCampaign };