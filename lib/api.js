// lib/api.js

import axios from "axios";

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";

// Search coins
export async function searchCrypto(query) {
  try {
    const res = await axios.get(`${COINGECKO_BASE}/search`, {
      params: { query }
    });
    // res.data.coins is an array of matching coins
    return res.data.coins;  
  } catch (err) {
    console.error("CoinGecko search error:", err);
    return [];
  }
}

// Get coin details by ID
export async function getCoinDetails(id) {
  try {
    const res = await axios.get(`${COINGECKO_BASE}/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false
      }
    });
    return res.data;
  } catch (err) {
    console.error("CoinGecko coin details error:", err);
    return null;
  }
}

// Get historical price data / chart data
export async function getCoinChart(id, days = 1) {
  try {
    const res = await axios.get(`${COINGECKO_BASE}/coins/${id}/market_chart`, {
      params: {
        vs_currency: "usd",
        days
      }
    });
    return res.data;  // will include price arrays etc.
  } catch (err) {
    console.error("CoinGecko chart data error:", err);
    return null;
  }
}
