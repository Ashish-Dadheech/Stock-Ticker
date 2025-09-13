// src/components/StockChart.js
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function StockChart({ data }) {
  const hasData = data && data.length > 0;

  return (
    <div className="mt-6 w-full h-80 bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 text-center text-gray-800">Price Chart (7 Days)</h3>

      {hasData ? (
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}
              labelStyle={{ color: "#374151" }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500 mt-10">No data available</p>
      )}
    </div>
  );
}
