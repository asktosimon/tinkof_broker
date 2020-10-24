import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";

// async function runBroker() {
//   if (!secretToken) throw new Error("Token is Empty!");

//   let response = await fetch(ordersURL, {
//     // method: "POST",
//     headers: {
//       Authorization: `Bearer ${secretToken}`
//     }
//   })

//   if (response.ok) {
//     const result = await response.json();
//     console.log(result)
//   } else {
//     throw new Error("Something is wrong!")
//   }
// };

// runBroker()
//   .then(() => console.log("DONE!"))
//   .catch((err) => console.error(err))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
