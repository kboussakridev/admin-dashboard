import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { motion } from "framer-motion";

const monthLySalesData = [
  { month: "Jul", sales: 4000 },
  { month: "Aug", sales: 3000 },
  { month: "Sep", sales: 5000 },
  { month: "Oct", sales: 4000 },
  { month: "Nov", sales: 6000 },
  { month: "Dec", sales: 7000 },
  { month: "Jan", sales: 8000 },
  { month: "Feb", sales: 6000 },
  { month: "Mar", sales: 7000 },
  { month: "Apr", sales: 8000 },
  { month: "May", sales: 9000 },
  { month: "Jun", sales: 10000 },
];

const SalesOverview = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Ce Mois");
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Doc de configuration: https://recharts.github.io/en-US/api/ */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100 ">
          Aperçu des Ventes
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>Ce Week End</option>
          <option>Ce Mois</option>
          <option>Ce Trimestre</option>
          <option>Cette Année</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthLySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B55630",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverview;
