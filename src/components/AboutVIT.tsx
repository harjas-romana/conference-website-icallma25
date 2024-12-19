import { motion } from 'framer-motion';
import { aboutVIT } from '../data/conferenceData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export const AboutVIT = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#1a0f2e] to-[#2d1810] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {aboutVIT.title}
            </h2>
            <p className="text-lg text-gray-300">
              {aboutVIT.description}
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {aboutVIT.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <span className="text-blue-400">✦</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {aboutVIT.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
