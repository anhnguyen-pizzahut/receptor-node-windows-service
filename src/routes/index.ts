import express from 'express';
import { syncOrders } from './syncOrders';
import { getOrders } from './getOrders';

const router = express.Router();

router.post('/syncOrders', syncOrders);

router.get('/getOrders', getOrders);

export { router };
