import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

const customerSegmentationData = [
  { subject: "Communication", A: 85, B: 92, FullMark: 100 },
  { subject: "Leadership", A: 135, B: 128, FullMark: 150 },
  { subject: "Résolution Problèmes", A: 100, B: 65, FullMark: 80 },
  { subject: "Travail d'équipe", A: 88, B: 95, FullMark: 100 },
  { subject: "Adaptabilité", A: 90, B: 120, FullMark: 130 },
  { subject: "Créativité", A: 62, B: 100, FullMark: 75 },
];

const CustomerSegmentation = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4 ">
        Segmentation client
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={customerSegmentationData}
          >
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="subject" name="Sujet" stroke="#9ca3af" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9ca3af" />

            <Radar
              name="Segment A"
              dataKey="A"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.6}
            />
            <Radar
              name="Segment B"
              dataKey="B"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomerSegmentation;
