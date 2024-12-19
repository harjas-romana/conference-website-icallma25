import React from 'react';
import { motion } from 'framer-motion';

interface CommitteeMember {
  name: string;
  designation?: string;
  institution: string;
  image?: string;
  bio?: string;
}

interface CommitteePageProps {
  title: string;
  subtitle: string;
  members: CommitteeMember[];
}

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

const CommitteeTemplate: React.FC<CommitteePageProps> = ({ title, subtitle, members }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl blur-3xl" />
          <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-10">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold mb-4 text-center"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 text-center mb-12"
            >
              {subtitle}
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    
                    {member.image && (
                      <div className="mb-4 w-24 h-24 mx-auto">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-2 border-purple-400"
                        />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    {member.designation && (
                      <p className="text-gray-300 text-center mb-2">{member.designation}</p>
                    )}
                    <p className="text-gray-400 text-center text-sm">{member.institution}</p>
                    {member.bio && (
                      <p className="mt-4 text-gray-400 text-sm">{member.bio}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CommitteeTemplate; 