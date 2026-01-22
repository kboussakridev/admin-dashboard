import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { DollarSign, ShoppingCart, TrendingUp, CreditCard } from "lucide-react";
import SalesOverviewChart from "../components/sale/SalesOverview";
import SalesByCategoryChart from "../components/sale/SalesByCategory";
import DailySalesTrendChart from "../components/sale/DailySalesTrend";

const salesStats = {
  totalRevenue: "1,255,654 €",
  avgOrderValue: "72.80 €",
  conversionRate: "3.45%",
  salesGrowth: "12.5%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Ventes" />

      <main className="max-w-7x1 mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total des Revenues"
            icon={DollarSign}
            value={salesStats.totalRevenue.toLocaleString()}
            color="#EF4444"
          />

          <StatCard
            name="Valeur moyenne de la commande"
            icon={ShoppingCart}
            value={salesStats.avgOrderValue.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="Taux de Conversion"
            icon={TrendingUp}
            value={salesStats.conversionRate.toLocaleString()}
            color="#10B981"
          />

          <StatCard
            name="Croissance des ventes"
            icon={CreditCard}
            value={salesStats.salesGrowth.toLocaleString()}
            color="#F59E0B"
          />
        </motion.div>
        <SalesOverviewChart />
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <SalesByCategoryChart />
          <DailySalesTrendChart />
        </div>
      </main>
    </div>
  );
};
export default SalesPage;
