import express from 'express';

import jobRoute from './job';

const router = express.Router();

router.use('/job', jobRoute);

export default router;
