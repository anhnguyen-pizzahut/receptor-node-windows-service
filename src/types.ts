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

export interface GmsOrder {
  orderId: string,
}

export interface ReceptorOrder {
  orderId: string,
}
