import { motion } from "framer-motion";
import { Eye, Search } from "lucide-react";
import { useState } from "react";

const ORDER_LIST_DATA = [
  {
    id: "ORD001",
    customer: "Marie Laurent",
    total: 235.4,
    status: "Expédié",
    date: "01/07/2025",
  },
  {
    id: "ORD002",
    customer: "Thomas Dubois",
    total: 189.9,
    status: "En attente",
    date: "28/06/2025",
  },
  {
    id: "ORD003",
    customer: "Sophie Martin",
    total: 456.75,
    status: "Expédié",
    date: "30/06/2025",
  },
  {
    id: "ORD004",
    customer: "Jean Petit",
    total: 120.5,
    status: "Annulé",
    date: "25/06/2025",
  },
  {
    id: "ORD005",
    customer: "Camille Bernard",
    total: 324.8,
    status: "En traitement",
    date: "02/07/2025",
  },
  {
    id: "ORD006",
    customer: "Luc Moreau",
    total: 89.99,
    status: "Expédié",
    date: "29/06/2025",
  },
  {
    id: "ORD007",
    customer: "Émilie Roux",
    total: 567.3,
    status: "En attente",
    date: "03/07/2025",
  },
  {
    id: "ORD008",
    customer: "Pierre Leroy",
    total: 210.25,
    status: "Expédié",
    date: "30/06/2025",
  },
  {
    id: "ORD009",
    customer: "Julie Fournier",
    total: 432.6,
    status: "En traitement",
    date: "01/07/2025",
  },
  {
    id: "ORD010",
    customer: "Nicolas Girard",
    total: 155.0,
    status: "Annulé",
    date: "27/06/2025",
  },
];

const OrderListTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ORDER_LIST_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ORDER_LIST_DATA.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.customer.toLocaleLowerCase().includes(term),
    );
    setFilteredOrders(filtered);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4 ">Commandes</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une commande"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                id: commande
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Statuts
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.customer}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.total}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.date}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      {
                        Expédié: "bg-green-100 text-green-800",
                        "En traitement": "bg-blue-100 text-blue-800",
                        "En attente": "bg-yellow-100 text-yellow-800",
                        Annulé: "bg-red-100 text-red-800",
                        Terminé: "bg-purple-100 text-purple-800",
                      }[order.status] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrderListTable;
