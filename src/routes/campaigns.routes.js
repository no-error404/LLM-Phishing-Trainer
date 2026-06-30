import { Router } from 'express';
import { launchStaticTrainingCampaign } from '../services/campaignLauncher.js';

const router = Router();


router.post('/static-launch', async (req, res) => {
    try {
        const campaign = await launchStaticTrainingCampaign();
        res.json({
            ok: true,
            campaign
        });
    } catch (error){
        res.json({
            ok: false,
            error: error.message
        });
    }
});

export default router;
