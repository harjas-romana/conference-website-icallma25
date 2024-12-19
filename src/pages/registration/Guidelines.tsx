import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaClock } from 'react-icons/fa';

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Guidelines: React.FC = () => {
  const guidelines = [
    {
      title: "Registration Process",
      icon: <FaCheckCircle className="text-3xl text-green-400" />,
      items: [
        "Complete the online registration form",
        "Upload required documents (ID proof, student/employee ID)",
        "Make payment through secure payment gateway",
        "Receive confirmation email with registration details"
      ]
    },
    {
      title: "Important Deadlines",
      icon: <FaClock className="text-3xl text-yellow-400" />,
      items: [
        "Early Bird Registration: March 15, 2024",
        "Regular Registration: April 30, 2024",
        "Late Registration: May 15, 2024",
        "Paper Submission: February 28, 2024"
      ]
    },
    {
      title: "Payment Information",
      icon: <FaInfoCircle className="text-3xl text-blue-400" />,
      items: [
        "All major credit/debit cards accepted",
        "Bank transfer options available",
        "GST will be added to the registration fee",
        "Group payment available for 5+ participants"
      ]
    },
    {
      title: "Cancellation Policy",
      icon: <FaExclamationTriangle className="text-3xl text-red-400" />,
      items: [
        "Full refund: 30 days before conference",
        "50% refund: 15-29 days before conference",
        "25% refund: 7-14 days before conference",
        "No refund: Less than 7 days before conference"
      ]
    }
  ];

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
            Registration Guidelines
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Please read these guidelines carefully before proceeding with your registration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {guidelines.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold ml-4">{section.title}</h2>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <span className="mr-3 text-green-400">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
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
            Additional Information
          </h2>
          <div className="prose prose-lg text-gray-300 max-w-none">
            <p>
              For any queries regarding registration, please contact our support team at{' '}
              <a href="mailto:support@icallma2024.com" className="text-blue-400 hover:text-blue-300">
                support@icallma2024.com
              </a>
            </p>
            <p>
              Registration includes access to all conference sessions, workshops, lunch, and refreshments
              during the conference days. Accommodation and travel arrangements are not included in the
              registration fee.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guidelines;
