export const apiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
export const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
export const registerURL = `${apiURL}/sandbox/register`
export const ordersURL = `${apiURL}/market/stocks`
export const secretToken = process.env.REACT_APP_TOKEN;