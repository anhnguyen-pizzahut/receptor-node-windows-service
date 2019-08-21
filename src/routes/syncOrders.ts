import { Request, Response } from 'express';
import { ApiResponse, ReceptorOrder } from '../types';
import { logger } from '@pizza-hut/gms-utils';
import { mapToReceptorOrders, mapRequestBodyToOrders } from '../utils';
import { Repository } from '../repository';

export const syncOrders = async (req: Request, res: Response) => {
  let result: string = 'ok';
  const { body } = req;
  logger.info({ orders: <ReceptorOrder>req.body }, 'sync requested');

  logger.info({ body }, 'retrieve order from remote source');
  const orders = mapToReceptorOrders(
    mapRequestBodyToOrders(JSON.stringify(body))
  );

  logger.info({ }, 'add order via repository');
  result = await (await Repository()).saveOrders(orders);

  logger.info({ result }, 'sync completed');
  const apiResponse: ApiResponse = {
    status: true,
    data: {
      payload: result
    }
  }
  res.status(200).send(apiResponse);
};
