export const API_URL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
export const SOCKET_URL =
  'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
export const REGISTER_URL = `${API_URL}/sandbox/register`;
export const STOCKS_URL = `${API_URL}/market/stocks`;
export const SECRET_TOKEN = process.env.REACT_APP_TOKEN;
