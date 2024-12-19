import { motion } from 'framer-motion';
import { committee } from '../data/additionalData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const CommitteeSection = ({ title, members }: { title: string; members: any[] }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {members.map((member) => (
        <motion.div
          key={member.id}
          variants={cardVariants}
          className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20"
        >
          {/* Image with gradient overlay */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] to-transparent z-10" />
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 p-6 -mt-16">
            <h4 className="text-lg font-semibold text-white mb-1">
              {member.name}
            </h4>
            <p className="text-sm text-blue-400 mb-1">{member.title}</p>
            <p className="text-sm text-gray-400">{member.affiliation}</p>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-300" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export const Committee = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#2d1810] to-[#1a0f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Conference Committee
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the team behind ICALLMA 2024
          </p>
        </motion.div>

        <CommitteeSection title="Organizing Committee" members={committee.organizing} />
        <CommitteeSection title="Technical Committee" members={committee.technical} />
      </div>
    </section>
  );
};
