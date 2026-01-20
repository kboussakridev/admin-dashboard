import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "Jul", sales: 4000 },
  { name: "Aug", sales: 3000 },
  { name: "Sep", sales: 5000 },
  { name: "Oct", sales: 4000 },
  { name: "Nov", sales: 6000 },
  { name: "Dec", sales: 7000 },
  { name: "Jan", sales: 8000 },
  { name: "Feb", sales: 6000 },
  { name: "Mar", sales: 7000 },
  { name: "Apr", sales: 8000 },
  { name: "May", sales: 9000 },
  { name: "Jun", sales: 10000 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Doc de configuration: https://recharts.github.io/en-US/api/ */}
      <h2 className="text-lg font-medium text-gray-100 ">Aperçu des Ventes</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B55630",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
