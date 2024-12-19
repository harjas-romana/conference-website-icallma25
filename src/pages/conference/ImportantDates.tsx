import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFileUpload, FaCheckCircle, FaUsers, FaStar } from 'react-icons/fa';

interface Timeline {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'submission' | 'registration' | 'conference';
}

const timeline: Timeline[] = [
  {
    date: 'January 15, 2024',
    title: 'Paper Submission Opens',
    description: 'Start submitting your research papers for review',
    icon: <FaFileUpload className="text-blue-400" />,
    category: 'submission'
  },
  {
    date: 'February 28, 2024',
    title: 'Paper Submission Deadline',
    description: 'Last date to submit your research papers',
    icon: <FaCalendarAlt className="text-red-400" />,
    category: 'submission'
  },
  {
    date: 'March 15, 2024',
    title: 'Early Bird Registration Ends',
    description: 'Last day for discounted registration rates',
    icon: <FaStar className="text-yellow-400" />,
    category: 'registration'
  },
  {
    date: 'March 31, 2024',
    title: 'Paper Acceptance Notification',
    description: 'Authors will be notified of paper acceptance',
    icon: <FaCheckCircle className="text-green-400" />,
    category: 'submission'
  },
  {
    date: 'April 30, 2024',
    title: 'Regular Registration Deadline',
    description: 'Last day for regular registration',
    icon: <FaUsers className="text-purple-400" />,
    category: 'registration'
  },
  {
    date: 'May 15-17, 2024',
    title: 'Conference Dates',
    description: 'Main conference days with presentations and workshops',
    icon: <FaCalendarAlt className="text-pink-400" />,
    category: 'conference'
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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const ImportantDates: React.FC = () => {
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
            Important Dates
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Mark your calendar with these crucial deadlines and events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6 rounded-xl border border-blue-500/20"
          >
            <h2 className="text-xl font-bold mb-4 text-blue-400">Submission Deadlines</h2>
            <p className="text-gray-300">Track important paper submission and review dates</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-6 rounded-xl border border-purple-500/20"
          >
            <h2 className="text-xl font-bold mb-4 text-purple-400">Registration Dates</h2>
            <p className="text-gray-300">Don't miss early bird registration opportunities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 p-6 rounded-xl border border-pink-500/20"
          >
            <h2 className="text-xl font-bold mb-4 text-pink-400">Conference Schedule</h2>
            <p className="text-gray-300">Main conference dates and events timeline</p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-blue-400 font-semibold">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              </div>
              <div className="hidden md:block w-4 h-4 bg-white rounded-full border-4 border-blue-400 z-10" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300">
            All deadlines are at 11:59 PM Pacific Time (UTC-8)
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Add to Calendar
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
