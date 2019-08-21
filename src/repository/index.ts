import ADODB from 'node-adodb';
import { getDbAccess } from '../configs/index';
import { SQL_STATEMENTS } from './statements';
import { logger } from '@pizza-hut/gms-utils';

export const Repository = async (connectionString?: string) => {
  const { file, password } = await getDbAccess();

  logger.info({ file }, 'detected db file');

  if (!connectionString) {
    connectionString = `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${file};Jet OLEDB:Database Password=${password};`
  }

  const connection = ADODB.open(connectionString);

  const getOrders = async () => {
    const orders = await connection.query(SQL_STATEMENTS.GET_ORDERS);
    return orders;
  }

  return {
    getOrders,
  }
}
