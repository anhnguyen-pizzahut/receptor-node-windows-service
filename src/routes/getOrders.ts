import { Request, Response } from 'express';
import { ApiResponse } from '../types';
import { logger } from '@pizza-hut/gms-utils';
import { Repository } from '../repository';
// import { logger } from '@pizza-hut/gms-utils';

export const getOrders = async (req: Request, res: Response) => {
  logger.info({ req }, 'Request');

  const repository = await Repository();
  const orders = await repository.getOrders();

  const apiResponse: ApiResponse = {
    status: true,
    data: {
      payload:JSON.stringify(orders),
    }
  }
  res.status(200).send(apiResponse);
}
