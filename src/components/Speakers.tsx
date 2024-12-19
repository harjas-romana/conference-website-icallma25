import { motion } from 'framer-motion';
import { speakers } from '../data/additionalData';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
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

export const Speakers = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#1a0f2e] to-[#2d1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Keynote Speakers
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from world-renowned experts in LLM research and applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20">
                {/* Image container with gradient overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] to-transparent z-10" />
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 p-6 -mt-20">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2">{speaker.title}</p>
                  <p className="text-sm font-semibold text-blue-400 mb-4">
                    {speaker.topic}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    {speaker.description}
                  </p>

                  {/* Social links */}
                  <div className="flex space-x-4">
                    <a
                      href={speaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
