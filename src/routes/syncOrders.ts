import { Request, Response } from 'express';
import { ApiResponse, ReceptorOrder } from '../types';
import { logger } from '@pizza-hut/gms-utils';

export const syncOrders = (req: Request, res: Response) => {
  const result: string = 'ok';
  logger.info({ orders: <ReceptorOrder>req.body }, 'Sync requested');
  logger.info({ result }, 'Sync completed');
  const apiResponse: ApiResponse = {
    status: true,
    data: {
      payload: result
    }
  }
  res.status(200).send(apiResponse);
};
