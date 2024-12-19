import { motion } from 'framer-motion';
import { targetAudience } from '../data/conferenceData';
import { FaUserGraduate, FaIndustry, FaLaptopCode, FaChalkboardTeacher, 
         FaFlask, FaBrain, FaRobot, FaChartLine, FaUsers } from 'react-icons/fa';

const icons = {
  researchers: FaFlask,
  academics: FaChalkboardTeacher,
  developers: FaLaptopCode,
  industry: FaIndustry,
  students: FaUserGraduate,
  professionals: FaBrain,
  engineers: FaRobot,
  analysts: FaChartLine,
  enthusiasts: FaUsers
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export const WhoShouldJoin = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20"
          >
            <span className="text-blue-400 font-semibold">Join Our Community</span>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 text-shadow-lg">Who Should Join ICALLMA 2024?</h2>
          <p className="text-lg mb-8 text-center max-w-2xl text-gray-300">
            Join a diverse group of professionals and academics in the field of AI and language models.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
          {targetAudience.map((audience) => (
            <motion.div key={audience.id} variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-semibold hover:text-purple-400 transition-colors duration-200 text-shadow-md">{audience.title}</h2>
              <p className="text-md mt-2 text-gray-400">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
