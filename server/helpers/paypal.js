const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv");

dotenv.config();

paypal.configure({
  mode: "sandbox", // or "live"
  client_id:  "AWE7YBCcSlGdb20U3fV77tOpl5uilNHzMJw9s7aF8To1wMw3K2gFf5FgHj-Z8awI3xyGxltl-fCARbKV",
  client_secret:  "ELfGO-QvP923WsH0ZwDM7NUmEZ47ribQ044YDOR1nBwiI9BNMxmned_FjUNVbPt_N9O18u9NzfJnt-KD",
});

// paypal.configure({
//   mode: "sandbox", // or "live"
//   client_id: process.env.PAYPAL_CLIENT_ID,
//   client_secret: process.env.PAYPAL_CLIENT_SECRET,
// });

module.exports = paypal;


// const paypal = require("paypal-rest-sdk");

// import dotenv from 'dotenv'
// dotenv.config()

// paypal.configure({
//   mode: "",
//   client_id:  "",
//   client_secret:  "",
// });

// module.exports = paypal;
