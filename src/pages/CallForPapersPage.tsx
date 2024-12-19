import { motion } from 'framer-motion';

const importantDates = [
  { event: "Paper Submission Deadline", date: "March 15, 2024" },
  { event: "Notification of Acceptance", date: "April 15, 2024" },
  { event: "Camera-Ready Submission", date: "May 1, 2024" },
  { event: "Early Bird Registration", date: "May 15, 2024" },
  { event: "Conference Dates", date: "June 20-22, 2024" }
];

const topics = [
  {
    category: "Large Language Models",
    topics: [
      "Architecture and Design",
      "Training Methodologies",
      "Fine-tuning Techniques",
      "Efficiency and Optimization",
      "Model Compression",
      "Few-shot and Zero-shot Learning"
    ]
  },
  {
    category: "Applications",
    topics: [
      "Natural Language Processing",
      "Text Generation and Summarization",
      "Question Answering Systems",
      "Code Generation",
      "Creative Writing",
      "Language Translation"
    ]
  },
  {
    category: "Ethics and Safety",
    topics: [
      "Bias and Fairness",
      "Transparency and Explainability",
      "Privacy Concerns",
      "Security Implications",
      "Social Impact",
      "Responsible AI Development"
    ]
  }
];

const submissionGuidelines = [
  "Papers must be written in English and follow the IEEE conference format",
  "Maximum length: 8 pages for full papers, 4 pages for short papers",
  "All submissions must be original and not simultaneously submitted elsewhere",
  "Blind review process - remove author information from submissions",
  "Include keywords and abstract (max 250 words)",
  "References do not count towards page limit"
];

export const CallForPapersPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100 mb-6">
            Call for Papers
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            Join us in advancing the field of Large Language Models at ICALLMA 2024
          </p>
        </motion.div>

        {/* Important Dates */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Important Dates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.event}</h3>
                <p className="text-white">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Topics */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Topics of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-300 flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Submission Guidelines */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Submission Guidelines</h2>
          <div className="p-8 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20">
            <ul className="space-y-4">
              {submissionGuidelines.map((guideline, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-purple-400 mr-3 mt-1">✓</span>
                  {guideline}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-center"
            >
              <a
                href="#"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-white to-gray-100 text-black font-semibold hover:shadow-lg transition-shadow"
              >
                Submit Your Paper
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
