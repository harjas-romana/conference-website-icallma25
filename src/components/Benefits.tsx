import { motion } from 'framer-motion';
import { FaGraduationCap, FaHandshake, FaLightbulb, FaGlobe, 
         FaCertificate, FaMicrophone, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';

type IconKey = "learning" | "networking" | "innovation" | "global" | 
               "certification" | "speaking" | "community" | "career" | "insights";

const icons = {
  learning: FaGraduationCap,
  networking: FaHandshake,
  innovation: FaLightbulb,
  global: FaGlobe,
  certification: FaCertificate,
  speaking: FaMicrophone,
  community: FaUsers,
  career: FaRocket,
  insights: FaChartLine
};

const benefits = [
  {
    id: 1,
    type: "learning" as IconKey,
    title: "Cutting-edge Knowledge",
    description: "Dive deep into the latest LLM advancements",
    highlights: ["Expert-led workshops", "Interactive sessions", "Real-world case studies"]
  },
  {
    id: 2,
    type: "networking" as IconKey,
    title: "Global Networking",
    description: "Connect with AI leaders worldwide",
    highlights: ["1:1 Networking sessions", "Industry meetups", "Collaboration opportunities"]
  },
  {
    id: 3,
    type: "innovation" as IconKey,
    title: "Innovation Showcase",
    description: "Experience breakthrough AI technologies",
    highlights: ["Live demonstrations", "Product launches", "Research previews"]
  },
  {
    id: 4,
    type: "certification" as IconKey,
    title: "Professional Growth",
    description: "Enhance your AI expertise",
    highlights: ["Certification workshops", "Skill development", "Career guidance"]
  },
  {
    id: 5,
    type: "insights" as IconKey,
    title: "Industry Insights",
    description: "Gain valuable market perspectives",
    highlights: ["Trend analysis", "Future predictions", "Market opportunities"]
  },
  {
    id: 6,
    type: "speaking" as IconKey,
    title: "Speaking Opportunities",
    description: "Share your expertise",
    highlights: ["Paper presentations", "Panel discussions", "Lightning talks"]
  }
];

export const Benefits = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent animate-pulse" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <span className="text-blue-400 font-semibold">Why Attend ICALLMA 2025?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Benefits of Attending
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join us for an immersive experience that will transform your understanding of AI and LLMs
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.type] || FaUsers;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-4">
                    {benefit.description}
                  </p>

                  <ul className="space-y-2">
                    {benefit.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
