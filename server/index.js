// This is where we will be handling all of the routes and logic from our api calls
const express = require('express');
require("dotenv").config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

app.use(express.json());

app.use(express.static("public"));

const port = 8080;

console.log('im in the server!')

// Testing out my apis

// 1. CoinGecko - crypto
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

// 2. Finnhub.io - stocks
// const finnhub = require('finnhub');
// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = process.env.FINN_API;
// const finnhubClient = new finnhub.DefaultApi()
// finnhubClient.quote("AAPL", (error, data, response) => {
//   console.log(data)
// });
// console.log(finnhubClient.quote("AAPL"))


// lets focus on getting some of this api data down for us
// Then focus on connecting to this stuff afterwards
// Might need to use nextjs as it plays nicely with create react app

// Cool so this works when the server is running directly from this file

// This is how I would get CURRENT PRICE of coins
async function gecko() {
  const data = await CoinGeckoClient.simple.price({
    ids: ['bitcoin', 'ethereum'],
    vs_currencies: ['usd']
  })
  console.log(data);
  return data;
}

// THIS IS THE RESPONSE BACK FROM ABOVE
// {
//   "success": true,
//   "message": "OK",
//   "code": 200,
//   "data": {
//       "bitcoin": {
//           "usd": 20878
//       },
//       "ethereum": {
//           "usd": 1138.98
//       }
//   }
// }

// Api for finnhub.io

async function geckoHist() {
  const data = await CoinGeckoClient.coins.fetchMarketChart('bitcoin', {
    days: 7
  })

  return data;
}

// THIS IS THE RESPONSE BACK FROM ABOVE
// {
//   "success": true,
//   "message": "OK",
//   "code": 200,
//   "data": {
//       "prices": [
//           [
//               1655247713183,
//               21605.29024309619
//           ],
//           [
//               1655251318795,
//               22223.152110755702
//           ],



// Finnhub for current price
async function finn() {
  const symbol = 'AAPL';
  let data = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINN_API}`);
  data = data.json();
  return data;
}

// This is the response. c is current price
// {
//   "c": 135.87,
//   "d": 4.31,
//   "dp": 3.2761,
//   "h": 137.06,
//   "l": 133.322,
//   "o": 133.42,
//   "pc": 131.56,
//   "t": 1655841604
// }


// Polygon for historical data
async function historical() {
  const symbol = 'AAPL';
  let data = await fetch(`https://eodhistoricaldata.com/api/eod/MCD.US?api_token=${process.env.EOD_API}&period=d&fmt=json&order=d&from=2022-06-07&to=2022-06-20`)
  data = data.json();
  return data;
}

app.get('/hello', (req, res) => {
  res.send('HELLO!')
  // gecko()
  // geckoHist()
  // finn()
  // historical()
  // .then((result) => res.send(result))
})


app.listen(port, () => {
  console.log('listening on port ' + port)
})