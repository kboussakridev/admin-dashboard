import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const userDemographicsData = [
  { name: "Electronique", value: 4000 },
  { name: "Vêtements", value: 3000 },
  { name: "Maison", value: 5000 },
  { name: "Sports", value: 4000 },
  { name: "Livres", value: 6000 },
];
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const userDemographics = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Doc de configuration: https://recharts.github.io/en-US/api/ */}
      <h2 className="text-lg font-medium text-gray-100 ">
        Démographie des utilisateurs
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userDemographicsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {userDemographicsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B55630",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend
              wrapperStyle={{ color: "#9ca3af" }}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default userDemographics;
