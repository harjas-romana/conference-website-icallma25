import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { faqs } from '../data/additionalData';
import { FaChevronDown } from 'react-icons/fa';

const FAQItem = ({ faq, isOpen, onToggle }: { faq: any; isOpen: boolean; onToggle: () => void }) => {
  return (
    <motion.div
      initial={false}
      className="border border-white/20 rounded-xl overflow-hidden backdrop-blur-xl"
    >
      <motion.button
        className="w-full px-6 py-4 flex items-center justify-between bg-white/10 text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-semibold text-white">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-purple-400"
        >
          <FaChevronDown />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 py-4 text-gray-300">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Find answers to common questions about ICALLMA 2024
        </p>
      </motion.div>

      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                }
              }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
