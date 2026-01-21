import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { Package, TrendingUp, DollarSign, AlertTriangle } from "lucide-react";
import ProductsTable from "../components/product/ProductsTable";
import SalesTrendChart from "../components/product/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Produits" />

      <main className="max-w-7x1 mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Produits Totales"
            icon={Package}
            value="1234"
            color="#6366F1"
          />

          <StatCard
            name="Meilleures ventes"
            icon={TrendingUp}
            value="89"
            color="#EC4899"
          />

          <StatCard
            name="Stock faible"
            icon={AlertTriangle}
            value="23"
            color="#F59E0B"
          />

          <StatCard
            name="Revenues Totales"
            icon={DollarSign}
            value="543,50€"
            color="#10B981"
          />
        </motion.div>

        <ProductsTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
