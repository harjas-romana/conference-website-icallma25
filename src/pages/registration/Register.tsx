import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  category: string;
  paperTitle?: string;
  dietaryRequirements?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    category: '',
    paperTitle: '',
    dietaryRequirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const InputField = ({ icon, ...props }: any) => (
    <motion.div variants={itemVariants} className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400"
      />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Conference Registration
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Fill out the form below to register for ICALLMA 2024
          </p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InputField
              icon={<FaUser />}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <InputField
              icon={<FaUser />}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <InputField
              icon={<FaEnvelope />}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              icon={<FaPhone />}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <InputField
              icon={<FaBuilding />}
              type="text"
              name="organization"
              placeholder="Organization/Institution"
              value={formData.organization}
              onChange={handleChange}
              required
            />
            <InputField
              icon={<FaGraduationCap />}
              type="text"
              name="designation"
              placeholder="Designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>

          <motion.div variants={itemVariants} className="mb-6">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
            >
              <option value="">Select Registration Category</option>
              <option value="student">Student</option>
              <option value="academic">Academic</option>
              <option value="industry">Industry Professional</option>
              <option value="international">International Delegate</option>
            </select>
          </motion.div>

          {formData.category && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="space-y-6 mb-8"
            >
              <InputField
                icon={<FaFileAlt />}
                type="text"
                name="paperTitle"
                placeholder="Paper Title (if presenting)"
                value={formData.paperTitle}
                onChange={handleChange}
              />
              <div>
                <label className="block text-gray-300 mb-2">Dietary Requirements</label>
                <textarea
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  rows={3}
                  placeholder="Please specify any dietary requirements"
                />
              </div>
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <p className="text-sm text-gray-400">
              By registering, you agree to our terms and conditions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              Register Now
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default Register;
