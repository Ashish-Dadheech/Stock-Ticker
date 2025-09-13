import Head from "next/head";
import StockCard from "../../components/StockCard";
import StockChart from "../../components/StockChart";
import axios from "axios";

export default function StockDetails({ stock, chartData, error }) {
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load stock data.
      </p>
    );
  if (!stock) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Head>
        <title>{`${
          stock.name
        } (${stock.symbol.toUpperCase()}) | Crypto Ticker`}</title>
        <meta
          name="description"
          content={`Live price chart of ${stock.name}`}
        />
        <meta name="keywords" content={`${stock.name}, crypto, prices`} />
      </Head>

      <div className="p-5 max-w-4xl mx-auto">
        <StockCard stock={stock} />
        {chartData?.length > 0 ? (
          <div className="mt-6 w-full overflow-x-auto">
            <StockChart data={chartData} />
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No chart data available
          </p>
        )}
      </div>
    </>
  );
}

// Server-side Rendering for SEO + Pre-rendered Data
export async function getServerSideProps(context) {
  const { symbol } = context.params;
  try {
    // Fetch coin details
    const detailsRes = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${symbol}`
    );
    const data = detailsRes.data;
    const stock = {
      name: data.name,
      symbol: data.symbol,
      price: data.market_data?.current_price?.usd || "N/A",
      marketCap: data.market_data?.market_cap?.usd || "N/A",
      change: data.market_data?.price_change_percentage_24h || "N/A",
    };

    // Fetch chart data
    const chartRes = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=7`
    );
    const chartData = chartRes.data.prices.map(([timestamp, price]) => ({
      time: new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      price,
    }));

    return { props: { stock, chartData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { stock: null, chartData: [], error: true } };
  }
}
