export interface ApiResponseData {
  payload: string,
}

export interface ApiRequest { }

export interface ApiResponse {
  status: boolean,
  data: ApiResponseData,
}

export interface ApiRoute {
  request: ApiRequest,
  response: ApiResponse,
}

export interface GmsOrderSyncPayload {
  order_id: string,
  order_details: string,
}

export interface GmsOrder {
  orderId: string,
  orderDetails: string,
}

export interface ReceptorOrder {
  orderId: string,
}
