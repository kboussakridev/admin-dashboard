import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  ShoppingBag,
  Eye,
  ArrowBigRight,
  ArrowUpRight,
} from "lucide-react";

const overviewData = [
  { name: "Revenue", value: "1,234,562", change: 12.5, icon: DollarSign },
  { name: "Utilisateur", value: "46,234", change: 8.3, icon: Users },
  { name: "Commandes", value: "9,234", change: -3.1, icon: ShoppingBag },
  { name: "Voir la page", value: "1,234,562", change: 115.7, icon: Eye },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-400 ">{item.name}</h3>
            <div
              className={`p-3 rounded-full bg-opacity-20 ${item.change >= 0 ? "bg-green-500" : "bg-red-500"}`}
            >
              <item.icon
                className={`size-6 ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
              />
            </div>
          </div>

          <p className="mt-1 text-xl font-semibold text-gray-100">
            {item.value}
          </p>

          <div className="mt-4 flex items-center">
            {item.change >= 0 ? (
              <ArrowUpRight className="size-5 text-green-500" />
            ) : (
              <ArrowUpRight className="size-5 text-red-500 rotate-180" />
            )}
            <span
              className={`ml-2 text-sm font-medium ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {Math.abs(item.change)}%
            </span>
            <span className="ml-2 text-sm text-gray-400">
              vs dernière période
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default OverviewCards;
