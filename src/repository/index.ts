import ADODB from 'node-adodb';
import { getDbAccess } from '../configs/index';
import { SQL_STATEMENTS } from './statements';
import { logger } from '@pizza-hut/gms-utils';
import { ReceptorOrder } from '../types';

export const Repository = async (connectionString?: string) => {
  const { file, password } = await getDbAccess();

  logger.info({ file }, 'detected db file');

  if (!connectionString) {
    connectionString = `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${file};Jet OLEDB:Database Password=${password};`
  }

  const connection = ADODB.open(connectionString);

  const getOrders = async (): Promise<ReceptorOrder> => {
    const orders = await connection.query(SQL_STATEMENTS.GET_ORDERS);
    return <ReceptorOrder>orders;
  }

  const saveOrders = async (orders: ReceptorOrder[]): Promise<string> => {
    let result = 'ok';
    orders.forEach(order => {
      logger.info({ order }, 'processing order');
      try {
        connection.execute(
          SQL_STATEMENTS.INSERT_ORDER
            .replace('{IdOrder}', '123')
            .replace('{IdOrderStatus}', '4')
            .replace('{CustomerName}', 'Test Customer')
            .replace('{ToGo}', '0')
            .replace('{Created}', (new Date()).toUTCString())
            .replace('{ExpectedReadyDate}', (new Date()).toUTCString())
            .replace('{Total}', '19.99')
            .replace('{DetailsJson}', '{}')
            .replace('{RestaurantName}', 'Test Store')
        );
        logger.info({ order }, 'complete pushing order');
      } catch (error) {
        logger.error({ error }, 'error occurred while processing order');
        result = 'error_occurred_for_some_orders'
      }
    });
    return result;
  }

  return {
    getOrders,
    saveOrders,
  }
}
