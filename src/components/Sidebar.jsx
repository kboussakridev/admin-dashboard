import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  TrendingUp,
  Users,
  Menu,
} from "lucide-react";
import { useState } from "react"; // React hook for state management
import { motion } from "framer-motion"; // Animation library
import { Link } from "react-router-dom"; // For navigation links
import { AnimatePresence } from "framer-motion"; // For animating presence of components

const SIDEBAR_ITEMS = [
  { name: "Aperçu", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Produits", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Utilisateurs", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Ventes", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Commandes", icon: TrendingUp, color: "#F59E0B", href: "/orders" },
  { name: "Analytique", icon: BarChart2, color: "#3B82F6", href: "/analytics" },
  { name: "Paramètres", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"} `}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-70 backdrop-blur-md p-4 border-r border-gray-700 flex flex-col">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-700 rounded-full transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link to={item.href} key={item.href}>
              <motion.div
                className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
