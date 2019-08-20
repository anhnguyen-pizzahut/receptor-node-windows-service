const QUERIES = {
  GET_ORDERS: 'SELECT * FROM OrderHeader',
  INSERT_ORDER: 'INSERT INTO OrderHeader VALUES ({IdOrder}, {IdOrderStatus}, "{CustomerName}", {ToGo}, "{Created}", "{ExpectedReadyDate}", {Total}, "{DetailsJson}", "{RestaurantName}")',
}
