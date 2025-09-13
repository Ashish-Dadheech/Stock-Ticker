## Stock Ticker App (Next.js + CoinGecko API)

A simple Stock/Crypto Ticker application built using **Next.js** and the **CoinGecko API**.  
The app allows users to search for cryptocurrencies, view details for each coin, and visualize price trends using interactive charts.  

---

## Features
- **Search Functionality**: Autocomplete search bar to find cryptocurrencies.
- **Dynamic Routing**: Each coin has a dedicated details page using Next.js dynamic routes.
- **Price Chart**: 7-day price chart displayed using Recharts.
- **SEO Optimization**: Dynamic META tags for better search engine optimization.
- **Responsive Design**: Mobile-friendly layout built with Tailwind CSS.
- **Error Handling**: Graceful handling for invalid coins or missing data.

---

## Project Structure
stock-ticker/
├── components/
│ ├── SearchBar.js # Search bar with autocomplete
│ ├── StockCard.js # Displays coin details
│ ├── StockChart.js # Recharts graph component
│
├── lib/
│ ├── api.js # API helper functions (optional if using Axios directly)
│
├── pages/
│ ├── index.js # Home page with search functionality
│ ├── stock/[symbol].js # Dynamic coin details page
│ ├── _app.js # Global App wrapper
│ ├── _document.js # Custom Document for SEO meta tags
│
├── public/
│ ├── favicon.ico # App icon for browser tab
│
├── styles/
│ ├── globals.css # Global CSS (Tailwind included)
│
├── package.json # Dependencies and scripts
├── README.md # Documentation 


---

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **API**: [CoinGecko API](https://www.coingecko.com/en/api)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## Installation & Setup
###  Clone the repository
```bash
git clone 
cd stock-ticker
