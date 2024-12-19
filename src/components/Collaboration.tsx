import { motion } from 'framer-motion';
import { collaboration } from '../data/conferenceData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export const Collaboration = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#2d1810] to-[#1a0f2e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {collaboration.title}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {collaboration.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
        >
          {collaboration.partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center"
            >
              <div className="text-5xl mb-4">{partner.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">
                {partner.count}
              </div>
              <div className="text-xl text-gray-300">
                {partner.name}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
