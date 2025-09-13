export default function StockCard({ stock }) {
  const priceChange = parseFloat(stock?.change || 0);
  const priceChangeColor = priceChange > 0 ? "text-green-600" : "text-red-600";

  // Format numbers nicely with compact notation
  const formatNumber = (num) => {
    if (!num || isNaN(num)) return "N/A";
    return num.toLocaleString("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4 max-w-sm w-full mx-auto text-center hover:shadow-lg transition-shadow duration-200">
      {/* Stock Name */}
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        {stock?.name || "Unknown"}{" "}
        <span className="text-gray-500 text-sm">
          ({stock?.symbol?.toUpperCase() || "N/A"})
        </span>
      </h2>

      {/* Stock Price */}
      <p className="text-gray-700 text-lg font-semibold">
        Price:{" "}
        {stock?.price
          ? `$${Number(stock.price).toFixed(2)}`
          : "N/A"}
      </p>

      {/* Market Cap */}
      <p className="text-gray-700">
        Market Cap: {formatNumber(stock?.marketCap)}
      </p>

      {/* 24h Change */}
      <p className={`text-lg font-semibold ${priceChangeColor}`}>
        24h Change:{" "}
        {stock?.change
          ? `${priceChange.toFixed(2)}%`
          : "N/A"}
      </p>
    </div>
  );
}
