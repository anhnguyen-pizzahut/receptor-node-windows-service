import ADODB from 'node-adodb';
import { RECEPTOR_CONSTANTS } from '../configs/index';

export const Repository = (connectionString?: string) => {
  const { file, password } = RECEPTOR_CONSTANTS;

  if (!connectionString) {
    connectionString = `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${file};Jet OLEDB:Database Password=${password};`
  }

  const connection = ADODB.open(connectionString);

  const getOrders = async () => {
    const orders = await connection.query('SELECT * FROM OrderHeader');
    return orders;
  }

  return {
    getOrders,
  }
}
