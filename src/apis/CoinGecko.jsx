import axios from 'axios';
import React from 'react';

export default axios.get(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=250d&page=1&sparkline=false'
);
