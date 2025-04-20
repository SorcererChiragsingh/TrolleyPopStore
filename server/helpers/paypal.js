const paypal = require("paypal-rest-sdk");

import dotenv from 'dotenv'
dotenv.config()

paypal.configure({
  mode: "",
  client_id:  "",
  client_secret:  "",
});

module.exports = paypal;
