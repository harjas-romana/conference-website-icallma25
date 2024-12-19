import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaRobot, FaChartLine, FaShieldAlt, FaCloud } from 'react-icons/fa';

interface Topic {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const topics: Topic[] = [
  {
    title: 'Machine Learning & AI',
    description: 'Deep learning, neural networks, reinforcement learning, and AI applications',
    icon: <FaRobot className="text-3xl text-blue-400" />
  },
  {
    title: 'Software Engineering',
    description: 'Software architecture, testing methodologies, and development practices',
    icon: <FaCode className="text-3xl text-green-400" />
  },
  {
    title: 'Data Science & Analytics',
    description: 'Big data analytics, data visualization, and statistical analysis',
    icon: <FaChartLine className="text-3xl text-purple-400" />
  },
  {
    title: 'Cybersecurity',
    description: 'Network security, cryptography, and privacy-preserving technologies',
    icon: <FaShieldAlt className="text-3xl text-red-400" />
  },
  {
    title: 'Cloud Computing',
    description: 'Distributed systems, containerization, and cloud-native applications',
    icon: <FaCloud className="text-3xl text-cyan-400" />
  },
  {
    title: 'Research Papers',
    description: 'Original research contributions in computer science and related fields',
    icon: <FaBook className="text-3xl text-yellow-400" />
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

export const CallForPapers: React.FC = () => {
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
            Call for Papers
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Share your research and innovations with the global tech community
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-xl border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{topic.title}</h3>
              </div>
              <p className="text-gray-300">{topic.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Submission Guidelines</h2>
          <div className="space-y-4 text-gray-300">
            <p>• Papers must be original and not previously published</p>
            <p>• Maximum paper length: 10 pages including figures and references</p>
            <p>• Format: IEEE conference format (double-column)</p>
            <p>• Submit papers in PDF format through the conference submission system</p>
            <p>• All papers will undergo a double-blind peer review process</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Review Process</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Double-blind peer review</li>
                <li>Minimum of three reviewers per paper</li>
                <li>Reviews based on originality, significance, and clarity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Publication</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Accepted papers will be published in conference proceedings</li>
                <li>Selected papers will be invited for journal special issues</li>
                <li>Papers will be indexed in major digital libraries</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Submit Your Paper
          </motion.button>
          <p className="mt-4 text-gray-400">
            Questions? Contact us at papers@conference.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};
