import express from 'express';
import { syncOrders } from './syncOrders';

const router = express.Router();

router.post('/syncOrders', syncOrders);

export { router };
