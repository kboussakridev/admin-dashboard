import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const INSIGHTS = [
  {
    icon: TrendingUp,
    color: "text-green-500",
    insight:
      "Les revenus ont augmenté de 15% par rapport au mois dernier, principalement grâce à une campagne email réussie.",
  },
  {
    icon: Users,
    color: "text-blue-500",
    insight:
      "L'engagement des utilisateurs a augmenté de 28% avec les améliorations du flux d'intégration.",
  },
  {
    icon: ShoppingBag,
    color: "text-purple-500",
    insight:
      "Les produits les plus vendus connaissent des taux de conversion 45% plus élevés ce trimestre.",
  },
  {
    icon: DollarSign,
    color: "text-yellow-500",
    insight:
      "La valeur moyenne des commandes a augmenté à 125 $, contre 98 $ le mois dernier.",
  },
];

const AIPoweredInsignts = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Informations enrichies par l'IA
      </h2>
      <div className="space-y-4">
        {INSIGHTS.map((insight, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-4 bg-gray-700 bg-opacity-50 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className={`flex-shrink-0 ${insight.color}`}>
              <insight.icon size={24} />
            </div>
            <p className="text-gray-300 text-sm">{insight.insight}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIPoweredInsignts;
