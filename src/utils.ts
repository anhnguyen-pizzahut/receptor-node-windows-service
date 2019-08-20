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
