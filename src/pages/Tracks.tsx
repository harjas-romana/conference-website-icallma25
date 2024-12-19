import { motion } from "framer-motion"
import { tracks } from "../data/tracks"

export default function Tracks() {
  return (
    <section className="min-h-screen bg-black py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            Research Tracks
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Explore cutting-edge research areas in Large Language Models and their applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {track.title}
                </h3>
                
                <ul className="space-y-3">
                  {track.topics?.map((topic, topicIndex) => (
                    <motion.li
                      key={topicIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + topicIndex * 0.05 }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-start"
                    >
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-blue-400" />
                      <span>{topic}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    Explore Track
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
