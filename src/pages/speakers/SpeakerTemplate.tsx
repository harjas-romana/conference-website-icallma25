import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGlobe, FaQuoteLeft, FaAward, FaUniversity, FaBookOpen } from 'react-icons/fa';

interface Publication {
  title: string;
  journal?: string;
  year: number;
  url?: string;
}

interface Award {
  title: string;
  year: number;
  organization: string;
}

interface Speaker {
  name: string;
  title: string;
  institution: string;
  image: string;
  bio: string;
  expertise: string[];
  keynoteTitle?: string;
  keynoteAbstract?: string;
  publications?: Publication[];
  awards?: Award[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

interface SpeakerTemplateProps {
  category: string;
  description: string;
  speakers: Speaker[];
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
    transition: { duration: 0.5 }
  }
};

const SpeakerTemplate: React.FC<SpeakerTemplateProps> = ({ category, description, speakers }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl font-bold mb-6 text-center"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {category}
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Top Gradient Bar */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Image Section */}
                      <div className="md:w-1/3">
                        <div className="relative group-hover:scale-105 transition-transform duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur" />
                          <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="relative rounded-xl w-full aspect-square object-cover"
                          />
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex justify-center gap-4 mt-4">
                          {speaker.socialLinks?.linkedin && (
                            <a href={speaker.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                               className="text-blue-400 hover:text-blue-300 transition-colors">
                              <FaLinkedin size={24} />
                            </a>
                          )}
                          {speaker.socialLinks?.twitter && (
                            <a href={speaker.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                               className="text-blue-400 hover:text-blue-300 transition-colors">
                              <FaTwitter size={24} />
                            </a>
                          )}
                          {speaker.socialLinks?.website && (
                            <a href={speaker.socialLinks.website} target="_blank" rel="noopener noreferrer"
                               className="text-blue-400 hover:text-blue-300 transition-colors">
                              <FaGlobe size={24} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-2/3 space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {speaker.name}
                          </h2>
                          <p className="text-xl text-gray-300 mb-1">{speaker.title}</p>
                          <p className="text-blue-400 flex items-center gap-2">
                            <FaUniversity />
                            {speaker.institution}
                          </p>
                        </div>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2">
                          {speaker.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Bio */}
                        <div className="relative">
                          <FaQuoteLeft className="absolute -left-4 -top-2 text-blue-500/20 text-4xl" />
                          <p className="text-gray-300 leading-relaxed pl-6">
                            {speaker.bio}
                          </p>
                        </div>

                        {/* Keynote Information */}
                        {speaker.keynoteTitle && (
                          <div className="space-y-2 pt-4 border-t border-white/10">
                            <h3 className="text-xl font-semibold text-purple-400">Keynote Presentation</h3>
                            <p className="text-lg text-gray-200">{speaker.keynoteTitle}</p>
                            {speaker.keynoteAbstract && (
                              <p className="text-gray-400 text-sm">{speaker.keynoteAbstract}</p>
                            )}
                          </div>
                        )}

                        {/* Awards */}
                        {speaker.awards && speaker.awards.length > 0 && (
                          <div className="space-y-2 pt-4 border-t border-white/10">
                            <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
                              <FaAward />
                              Notable Awards
                            </h3>
                            <ul className="space-y-2">
                              {speaker.awards.slice(0, 3).map((award, idx) => (
                                <li key={idx} className="text-gray-300 text-sm">
                                  {award.title} ({award.year}) - {award.organization}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Recent Publications */}
                        {speaker.publications && speaker.publications.length > 0 && (
                          <div className="space-y-2 pt-4 border-t border-white/10">
                            <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
                              <FaBookOpen />
                              Recent Publications
                            </h3>
                            <ul className="space-y-2">
                              {speaker.publications.slice(0, 3).map((pub, idx) => (
                                <li key={idx} className="text-gray-300 text-sm">
                                  {pub.url ? (
                                    <a href={pub.url} target="_blank" rel="noopener noreferrer"
                                       className="hover:text-blue-400 transition-colors">
                                      {pub.title} ({pub.year})
                                    </a>
                                  ) : (
                                    <span>{pub.title} ({pub.year})</span>
                                  )}
                                  {pub.journal && <span className="text-gray-400"> - {pub.journal}</span>}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SpeakerTemplate; 