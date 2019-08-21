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
  orderId: number,
  orderDetails: string,
}

export interface PaymentTypeInfo {
  IdPaymentType?: number;
  Name?: string;
  ImageAddress?: string;
  MayHaveChange: boolean | false;
  Online: boolean | false;
}

export interface OrderPaymentInfo {
  IntegrationCode?: string;
  PaidValue: number | 0;
  Online: boolean | false;
  AuthorizationCode?: string;
  PaymentType?: PaymentTypeInfo;
}

export interface OrderMenuDishOptionalItemInfo {
  Name?: string;
  Description?: string;
  Quantity: number | 0;
  TotalValue: number | 0;
  TotalUnitValue: number | 0;
  IntegrationCode?: string;
}

export interface OrderMenuDishOptionalInfo {
  Name?: string;
  Description?: string;
  Value: number | 0;
  IntegrationCode?: string;
  ItemList: OrderMenuDishOptionalItemInfo[];
}

export interface OrderMenuDishFractionItemOptionalItem {
  Name?: string;
  Description?: string;
  Quantity: number | 0;
  TotalValue: number | 0;
  TotalUnitValue: number | 0;
  IntegrationCode?: string;
}

export interface OrderMenuDishFractionItemOptional {
  Name: string;
  Description: string;
  Value: number | 0;
  IntegrationCode?: string;
  ItemList: OrderMenuDishFractionItemOptionalItem[];
}

export interface OrderMenuDishFractionItem {
  Name?: string;
  Description?: string;
  Quantity: number | 0;
  TotalValue: number | 0;
  IntegrationCode?: string;
  OptionalList: OrderMenuDishFractionItemOptional[];
}

export interface OrderMenuDishInfo {
  Name?: string;
  Description?: string;
  Quantity: number | 0;
  IsPizza: boolean | false;
  IsOptionalsPopupActive: boolean | false;
  TotalValue: number | 0;
  TotalUnitValue: number | 0;
  OriginalTotalValue: number | 0;
  OriginalUnitValue: number | 0;
  IntegrationCode?: string;
  OptionalList?: OrderMenuDishOptionalInfo[];
  FractionList?: OrderMenuDishFractionItem[];
}

export interface Coordinate {
  Latitude?: number;
  Longitude?: number;
}

export interface CustomerDeliveryAddress {
  IdAddressType?: number;
  Name?: string;
  ZipCode?: string;
  StateCode?: string;
  City?: string;
  Address?: string;
  Neighborhood?: string;
  Number?: string;
  Complement?: string;
  Reference?: string;
  IdPhoneType?: number;
  PhoneNumber?: string;
  PhoneComplement?: string;
  CoordinateData?: Coordinate;
}

export interface CustomerInfo {
  Email?: string;
  Name?: string;
  Password?: string;
  DocumentNumber?: string;
  IdPhoneType?: number;
  PhoneNumber?: string;
  PhoneComplement?: string;
  SendEmailNotification: boolean | false;
  SendSMSNotification: boolean | false;
  SecretQuestion?: string;
  SecretAnswer?: string;
  CallCenterUser: boolean | false;
}

export interface AddressInfo {
  ZipCode?: string;
  StateCode?: string;
  City?: string;
  Address?: string;
  Neighborhood?: string;
  Number?: string;
  Complement?: string;
  Reference?: string;
  CoordinateData?: Coordinate;
}

export interface MenuGroupInfo {
  IdMenuGroup?: number;
  Name?: string;
  Description?: string;
}

export interface RestaurantInfo {
  IdRestaurant?: number;
  Name?: string;
  UniqueName?: string;
  AcceptToGo: boolean | false;
  Address?: AddressInfo;
  PhotoAddress?: string;
  MinimumOrderValue?: number;
  MaximumOrderChange?: number;
  ExternalName?: string;
  ExternalLink?: string;
  Online: boolean | false;
  MenuGroups?: MenuGroupInfo[];
  IdMenuGroupDefault?: number;
  PreparationTime?: number;
}

export interface ReceptorOrder {
  PaymentList?: OrderPaymentInfo[];
  MenuDishInfoList?: OrderMenuDishInfo;
  CustomerDeliveryAddress: CustomerDeliveryAddress;
  Observation?: string;
  IntegrationCode?: string;
  CustomerDocument?: string;
  CustomerPhoneComplement?: string;
  CustomerPhoneNumber?: string;
  CustomerIdPhoneType?: number;
  IdOrderStatus: number;
  Total: number | 0;
  DeliveryFee: number | 0;
  Discount: number | 0;
  ToGo: boolean | false;
  ExptectedReadyDate?: Date;
  FinalDate?: Date;
  Date: Date;
  Customer: CustomerInfo;
  Restaurant: RestaurantInfo;
  Key: number;
  Subtotal: number | 0;
  ReceiptDocument?: string;
}
