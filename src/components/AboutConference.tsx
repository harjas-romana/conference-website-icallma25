import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot,
         FaUniversity, FaIndustry, FaLightbulb, FaHandshake } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const AboutConference: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent animate-pulse" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-2/3 left-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <span className="text-blue-400 font-semibold">March 15-17, 2025 • New Delhi, India</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About ICALLMA 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The Premier International Conference on Large Language Models and Their Applications
            </p>
          </motion.div>

          {/* Conference Overview */}
          <motion.div 
            variants={itemVariants} 
            className="mb-20"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Conference Overview
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  ICALLMA 2025 marks a significant milestone as the first international conference dedicated to the advancement of Large Language Models and their applications. This pioneering event brings together world-renowned researchers, industry leaders, and innovators to explore the cutting-edge developments in AI technology.
                </p>
                <p>
                  Join us for three days of intensive knowledge sharing, featuring keynote speeches, technical sessions, workshops, and networking opportunities. Experience the future of AI as we delve into the latest breakthroughs in LLM technology and their transformative impact across various sectors.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { number: 500, suffix: "+", label: "Attendees" },
              { number: 50, suffix: "+", label: "Speakers" },
              { number: 30, suffix: "+", label: "Countries" },
              { number: 100, suffix: "+", label: "Research Papers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <span
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {stat.number}{stat.suffix}
                </span>
                /{'>'}
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conference Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaRobot,
                  title: "Cutting-edge AI",
                  description: "Explore the latest breakthroughs in LLM technology and applications"
                },
                {
                  icon: FaUniversity,
                  title: "Academic Excellence",
                  description: "Learn from leading researchers and academic institutions"
                },
                {
                  icon: FaIndustry,
                  title: "Industry Insights",
                  description: "Gain practical perspectives from industry leaders"
                },
                {
                  icon: FaHandshake,
                  title: "Networking",
                  description: "Connect with peers and potential collaborators"
                },
                {
                  icon: FaLightbulb,
                  title: "Innovation",
                  description: "Discover new applications and use cases for LLMs"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <feature.icon className="text-4xl mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutConference;
