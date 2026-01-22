import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";
import UsersTable from "../components/user/UsersTable";
import UserGrowthChart from "../components/user/UserGrowth";
import UserActivyHeatmapChart from "../components/user/UserActivyHeatmap";
import UserDemographicsChart from "../components/user/UserDemographics";

const userStats = {
  totalUsers: 98542,
  newUsersToday: 350,
  activeUsers: 22356,
  churnRate: "2.6%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Utilisateurs" />

      <main className="max-w-7x1 mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Totale Utilisateurs"
            icon={Users}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="Nouveaux Utilisateurs Aujourd'hui"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />

          <StatCard
            name="Utilisateurs actifs"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />

          <StatCard
            name="Taux de Désabonnement"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivyHeatmapChart />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};
export default UsersPage;
