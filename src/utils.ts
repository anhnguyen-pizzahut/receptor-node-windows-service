
import { notify } from 'node-notifier';
import alert from 'alert-node';
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

export const showNotification = (message: string) => {
  notify({
    title: 'PHDV - Novas encomendas chegaram',
    sound: true,
    message,
    icon: 'data/pizzahut-icon.png',
  });
}

export const showIncomingOrdersAlert = (message: string, ordersList: ReceptorOrder[]) => {
  const displayedMsg = `Sistema de Gerenciamento de Pedidos PHDV\n${message}\n\nPedidos recebidos:\n`;
  const displayedOrderId = ordersList.map(x => x.orderId).join('\n');
  alert(`${displayedMsg}${displayedOrderId}`);
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
