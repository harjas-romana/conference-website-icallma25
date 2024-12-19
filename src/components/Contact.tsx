import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { useState } from 'react';

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

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Location",
    details: "VIT Bhopal University, Bhopal-Indore Highway, Sehore, Madhya Pradesh, India",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    details: "+91 XXX XXX XXXX",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    details: "admissions@vitbhopal.ac.in",
    color: "from-pink-400 to-pink-600"
  }
];

const socialLinks = [
  { icon: <FaTwitter />, link: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: <FaLinkedin />, link: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: <FaGithub />, link: "#", label: "GitHub", color: "hover:text-purple-400" },
  { icon: <FaDiscord />, link: "#", label: "Discord", color: "hover:text-indigo-400" },
];

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent animate-pulse" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Contact Us
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-shadow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20"
              >
                <div className="text-purple-400">{info.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-300">{info.details}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-64 backdrop-blur-xl bg-white/10 border border-white/20">
              <iframe
                src="https://maps.app.goo.gl/VRtPh6Jt9yj4TMUe6"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
