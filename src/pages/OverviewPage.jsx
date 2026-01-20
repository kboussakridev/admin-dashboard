import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Aperçu" />

      <main className="max-w-7x1 mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Ventes Totales"
            icon={Zap}
            value="24K"
            color="#6366F1"
          />
          <StatCard
            name="Totales Produits"
            icon={ShoppingBag}
            value="564"
            color="#EC4899"
          />
          <StatCard
            name="Taux de Conversion"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
          <StatCard
            name="Nouveaux Utilisateurs"
            icon={Users}
            value="1,234"
            color="#8B5CF6"
          />
        </motion.div>
        {/* CHARTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SalesOverviewChart />
            <CategoryDistributionChart />
            <SalesChannelChart />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default OverviewPage;
