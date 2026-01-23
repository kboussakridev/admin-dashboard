import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { ShoppingBag, Clock, CheckCircle, DollarSign } from "lucide-react";
import OrderListTable from "../components/order/OrderListTable";
import DailyOrdersChart from "../components/order/DailyOrders";
import OrderStatusDistributionChart from "../components/order/OrderStatusDistribution";

const orderStats = {
  totalOrders: "1,523",
  pendingOrders: 54,
  completedOrders: "1,235",
  totalRevenue: "89,456 €",
};

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Commandes" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Totale Commandes"
            icon={ShoppingBag}
            value={orderStats.totalOrders.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="Commandes en attente"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#10B981"
          />

          <StatCard
            name="Commandes terminées"
            icon={CheckCircle}
            value={orderStats.completedOrders.toLocaleString()}
            color="#F59E0B"
          />

          <StatCard
            name="Chiffre d'affaires total"
            icon={DollarSign}
            value={orderStats.totalRevenue.toLocaleString()}
            color="#EF4444"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DailyOrdersChart />
          <OrderStatusDistributionChart />
        </div>
        <OrderListTable />
      </main>
    </div>
  );
};
export default OrdersPage;
