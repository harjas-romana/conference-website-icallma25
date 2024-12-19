import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaUsers, FaGlobe } from 'react-icons/fa';

interface FeeCategory {
  title: string;
  icon: React.ReactNode;
  categories: {
    type: string;
    early: string;
    regular: string;
  }[];
}

const feeCategories: FeeCategory[] = [
  {
    title: "Academic Participants",
    icon: <FaGraduationCap className="text-4xl" />,
    categories: [
      {
        type: "Students",
        early: "₹3,000",
        regular: "₹4,000"
      },
      {
        type: "Research Scholars",
        early: "₹4,000",
        regular: "₹5,000"
      },
      {
        type: "Faculty Members",
        early: "₹5,000",
        regular: "₹6,000"
      }
    ]
  },
  {
    title: "Industry Participants",
    icon: <FaUserTie className="text-4xl" />,
    categories: [
      {
        type: "Professionals",
        early: "₹8,000",
        regular: "₹10,000"
      },
      {
        type: "Executives",
        early: "₹10,000",
        regular: "₹12,000"
      }
    ]
  },
  {
    title: "International Participants",
    icon: <FaGlobe className="text-4xl" />,
    categories: [
      {
        type: "Students",
        early: "$200",
        regular: "$250"
      },
      {
        type: "Professionals",
        early: "$300",
        regular: "$350"
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const FeeStructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Conference Fee Structure
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Early bird registration ends on March 15, 2024. Take advantage of our discounted rates!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {feeCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold ml-4">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.categories.map((item, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Early Bird</p>
                        <p className="text-xl font-bold text-green-400">{item.early}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Regular</p>
                        <p className="text-xl font-bold">{item.regular}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Important Notes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>All fees are inclusive of GST</li>
            <li>Early bird registration deadline: March 15, 2024</li>
            <li>Fee includes conference kit, lunch, and refreshments</li>
            <li>Accommodation can be arranged at additional cost</li>
            <li>Group discounts available for 5 or more participants</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
