import {SECRET_TOKEN, STOCKS_URL} from './url';

export async function runBroker() {
  if (!SECRET_TOKEN) throw new Error("Token is Empty!");

  let response = await fetch(STOCKS_URL, {
    headers: {
      Authorization: `Bearer ${SECRET_TOKEN}`
    }
  })

  if (response.ok) {
    const result = await response.json();
    console.log(result)
  } else {
    throw new Error("Something is wrong!")
  }
};