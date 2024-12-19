import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaLightbulb, FaClock, FaChalkboardTeacher, 
         FaGlobe, FaRocket, FaMicrophone, FaHandshake, FaCode, FaRobot, FaBrain, FaBalanceScale, FaGraduationCap, FaAtom, FaMicrochip, FaIndustry, FaShieldAlt, FaEnvelope, FaCamera } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
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

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Hero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

        {/* ICALLMA 2025 Introduction */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl blur-3xl" />
          <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-10">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 text-center"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ICALLMA 2025
              </span>
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-200"
            >
              1st International Conference on Advancement in Large Language Models and its Applications
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              <p className="text-gray-300 leading-relaxed mb-6 text-lg text-justify">
                The 1st International Conference on Advancement in Large Language Models and its Applications (ICALLMA 2025) aims to bring together leading researchers, industry professionals, and academic scholars to explore the cutting-edge developments in Large Language Models (LLMs) and their wide-ranging applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg text-justify">
                With LLMs transforming various industries, the conference will focus on their impact across multiple domains such as healthcare, natural language processing (NLP), language understanding, and ambiguity resolution, while also exploring their role in financial technologies (FinTech), autonomous systems, legal technologies, personalized education, bioinformatics, creative arts (including content generation and music composition), social sciences, and environmental sciences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg text-justify">
                ICALLMA 2025 invites original research papers, surveys, and technical reports that contribute to the advancement of LLMs. With an emphasis on real-world applications and scalability, the conference will explore new models, algorithms, architectures, and frameworks.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Conference Venue:</h3>
                  <p className="ml-4">Auditorium, VIT Bhopal University</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Conference Date:</h3>
                  <p className="ml-4">April 1, 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Conference Highlights */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 relative z-10"
        >
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Conference Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaCalendar, 
                title: "Important Dates", 
                description: "April 1, 2025", 
                link: "/important-dates" 
              },
              { 
                icon: FaMapMarkerAlt, 
                title: "Venue", 
                description: "VIT Bhopal University", 
                link: "/venue" 
              },
              { 
                icon: FaUsers, 
                title: "Distinguished Speakers", 
                description: "Leading AI Researchers", 
                link: "/speakers" 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="mb-4 p-3 inline-block rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <item.icon className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <Link 
                  to={item.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 110 18 9 9 0 010-18z" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conference Stats */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 py-16 relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl backdrop-blur-xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 relative z-10">
            {[
              { 
                number: "100+", 
                label: "Speakers", 
                icon: FaMicrophone, 
                color: "from-blue-400 to-blue-600" 
              },
              { 
                number: "500+", 
                label: "Expected Attendees", 
                icon: FaUsers, 
                color: "from-purple-400 to-purple-600" 
              },
              { 
                number: "20+", 
                label: "Technical Sessions", 
                icon: FaChalkboardTeacher, 
                color: "from-pink-400 to-pink-600" 
              },
              { 
                number: "15+", 
                label: "Countries", 
                icon: FaGlobe, 
                color: "from-green-400 to-green-600" 
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${stat.color} opacity-80 mb-4 transform group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className="text-2xl text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Important Dates Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl blur-3xl" />
          
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Important Dates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                date: "December 15, 2024",
                title: "Paper Submission Deadline",
                description: "Submit your research papers and proposals",
                icon: FaCode,
                color: "from-blue-600/20 to-blue-800/20"
              },
              {
                date: "January 20, 2025",
                title: "Notification of Acceptance",
                description: "Authors will be notified of acceptance decisions",
                icon: FaEnvelope,
                color: "from-purple-600/20 to-purple-800/20"
              },
              {
                date: "February 15, 2025",
                title: "Camera-Ready Submission",
                description: "Final version of accepted papers due",
                icon: FaCamera,
                color: "from-pink-600/20 to-pink-800/20"
              },
              {
                date: "February 28, 2025",
                title: "Early Bird Registration",
                description: "Last day for early bird registration discount",
                icon: FaClock,
                color: "from-indigo-600/20 to-indigo-800/20"
              },
              {
                date: "March 10, 2025",
                title: "Workshop Proposals",
                description: "Deadline for workshop and tutorial proposals",
                icon: FaLightbulb,
                color: "from-violet-600/20 to-violet-800/20"
              },
              {
                date: "March 15-17, 2025",
                title: "Conference Dates",
                description: "Main conference and workshop days",
                icon: FaCalendar,
                color: "from-cyan-600/20 to-cyan-800/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-8 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3 w-full">
                      <item.icon className="text-2xl text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg font-semibold text-blue-400">
                        {item.date}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Tracks */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent rounded-3xl blur-3xl" />
          
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Conference Tracks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                number: "01",
                title: "Applications of LLMs",
                description: "Exploring practical implementations and real-world applications of Large Language Models",
                icon: FaRobot,
                color: "from-blue-600/20 to-blue-800/20"
              },
              {
                number: "02",
                title: "LLM Architectures & Algorithms",
                description: "Latest advancements in model architectures and algorithmic innovations",
                icon: FaBrain,
                color: "from-indigo-600/20 to-indigo-800/20"
              },
              {
                number: "03",
                title: "Ethical & Social Considerations",
                description: "Addressing ethical challenges and social implications of LLM deployment",
                icon: FaBalanceScale,
                color: "from-purple-600/20 to-purple-800/20"
              },
              {
                number: "04",
                title: "Education & HCI",
                description: "LLMs in educational contexts and human-computer interaction",
                icon: FaGraduationCap,
                color: "from-pink-600/20 to-pink-800/20"
              },
              {
                number: "05",
                title: "Interdisciplinary Applications",
                description: "Cross-domain applications and emerging use cases",
                icon: FaAtom,
                color: "from-violet-600/20 to-violet-800/20"
              },
              {
                number: "06",
                title: "Core Advancements",
                description: "Fundamental research and technical challenges in LLM development",
                icon: FaMicrochip,
                color: "from-fuchsia-600/20 to-fuchsia-800/20"
              },
              {
                number: "07",
                title: "Industry Adoption",
                description: "Commercial applications and enterprise integration of LLMs",
                icon: FaIndustry,
                color: "from-rose-600/20 to-rose-800/20"
              },
              {
                number: "08",
                title: "Security & Privacy",
                description: "Security considerations, privacy preservation, and compliance",
                icon: FaShieldAlt,
                color: "from-cyan-600/20 to-cyan-800/20"
              }
            ].map((track, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-8 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-50">
                      {track.number}
                    </span>
                    <div>
                      <track.icon className="text-3xl mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {track.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                        {track.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Attend Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl backdrop-blur-xl" />
          <div className="relative z-10 p-10">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Attend?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  icon: FaMicrophone, 
                  title: "Expert Talks & Keynotes", 
                  description: "Engage with prominent figures in the field through keynote speeches, technical sessions, and panel discussions" 
                },
                { 
                  icon: FaHandshake, 
                  title: "Networking & Collaboration", 
                  description: "Connect with leading researchers, industry professionals, and academic scholars in the LLM domain" 
                },
                { 
                  icon: FaRocket, 
                  title: "Cutting-Edge Research", 
                  description: "Explore the latest theoretical advancements and practical implementations in Large Language Models" 
                },
                { 
                  icon: FaLightbulb, 
                  title: "Interdisciplinary Applications", 
                  description: "Discover novel applications of LLMs in healthcare, finance, education, robotics, and social sciences" 
                },
                { 
                  icon: FaCode, 
                  title: "Technical Contributions", 
                  description: "Present your research papers, surveys, and technical reports on LLM advancements" 
                },
                { 
                  icon: FaBalanceScale, 
                  title: "Ethical Discussions", 
                  description: "Participate in discussions about ethical implications and responsible development of LLMs" 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center py-16 relative z-10"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join Us at ICALLMA 2025
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of this groundbreaking conference where leading researchers and practitioners
            share their insights on the latest technological advancements.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/register"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;
