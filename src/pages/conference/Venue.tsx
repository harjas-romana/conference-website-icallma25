import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaHotel, FaPlane, FaCar, FaSubway, FaUtensils } from 'react-icons/fa';

interface VenueInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const venueDetails: VenueInfo[] = [
  {
    title: 'Conference Center',
    description: 'Silicon Valley Convention Center, featuring state-of-the-art facilities and modern amenities',
    icon: <FaMapMarkerAlt className="text-3xl text-red-400" />
  },
  {
    title: 'Accommodation',
    description: 'Special rates at partner hotels within walking distance of the venue',
    icon: <FaHotel className="text-3xl text-blue-400" />
  },
  {
    title: 'Airport Access',
    description: '30 minutes from San Francisco International Airport (SFO)',
    icon: <FaPlane className="text-3xl text-green-400" />
  },
  {
    title: 'Parking',
    description: 'Ample parking space available with special rates for conference attendees',
    icon: <FaCar className="text-3xl text-yellow-400" />
  },
  {
    title: 'Public Transport',
    description: 'Accessible via BART and local transit systems',
    icon: <FaSubway className="text-3xl text-purple-400" />
  },
  {
    title: 'Dining Options',
    description: 'Various dining options available within and around the venue',
    icon: <FaUtensils className="text-3xl text-pink-400" />
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

const Venue = () => {
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
            Conference Venue
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join us at the heart of Silicon Valley
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Silicon Valley Convention Center</h2>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-400" />
                123 Innovation Drive, San Jose, CA 95110
              </p>
              <p>
                The Silicon Valley Convention Center is a world-class facility featuring:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>25,000 sq ft of conference space</li>
                <li>Multiple breakout rooms and workshop areas</li>
                <li>High-speed WiFi throughout the venue</li>
                <li>Modern audiovisual equipment</li>
                <li>Dedicated networking spaces</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            <img
              src="/venue.jpg"
              alt="Conference Venue"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {venueDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-xl border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  {detail.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{detail.title}</h3>
              </div>
              <p className="text-gray-300">{detail.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Area Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Nearby Attractions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Tech Museum of Innovation</li>
                <li>San Jose Museum of Art</li>
                <li>Santana Row Shopping District</li>
                <li>San Pedro Square Market</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Weather</h3>
              <p className="text-gray-300">
                San Jose enjoys a Mediterranean climate with mild temperatures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
                <li>Average temperature: 70°F (21°C)</li>
                <li>Low chance of precipitation</li>
                <li>Comfortable conference conditions</li>
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
            Get Directions
          </motion.button>
          <p className="mt-4 text-gray-400">
            Need help planning your trip? Contact us at venue@conference.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Venue;
