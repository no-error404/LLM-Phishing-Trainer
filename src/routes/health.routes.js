import { Router } from 'express';
import { gophishRequest } from '../gophish/client.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
    timestamp: new Date().toISOString()
  });
});

router.get('/gophish', async (req, res) => {
  try {
    const response = await gophishRequest('/api/campaigns/');
    res.json({
      ok: true,
      gophish: response
    });
  }
  catch (error) {
    res.status(200).json({
      ok: false,
      error: error.message
    });
  }})


export default router;