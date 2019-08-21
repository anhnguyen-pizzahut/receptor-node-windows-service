import { ReceptorOrder, GmsOrder, GmsOrderSyncPayload } from "./types";
import { logger } from "@pizza-hut/gms-utils";

export const EndpointsFactory = (): string | undefined => {
  const { MARKET } = process.env;
  switch (MARKET) {
    case 'mx-1':
      return undefined;
    case 'br-1':
      return 'http://localhost:8080/syncOrders';
    default:
      return undefined;
  }
}

export const mapRequestBodyToOrders = (body: string): GmsOrder[] => {
  logger.info({ body }, 'map request body to synchronizable orders');
  try {
    if (body && body.length > 0) {
      const requestedOrders: GmsOrderSyncPayload[] = JSON.parse(body);
      return requestedOrders.map((order: GmsOrderSyncPayload) => {
        return <GmsOrder>{
          orderId: order['order_id'],
          orderDetails: order['order_details'],
        }
      });
    } else {
      return [];
    }
  } catch (error) {
    logger.error({ error }, 'error occurred while mapping request body to orders');
    return [];
  }
}

export const mapToReceptorOrders = (gmsOrder: GmsOrder[]): ReceptorOrder[] => {
  return [];
}
