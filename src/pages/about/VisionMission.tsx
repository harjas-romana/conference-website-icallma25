import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';

const VisionMission: React.FC = () => {
  const values = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in education and research",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Fostering creativity and pioneering solutions",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Maintaining ethical standards and professional conduct",
      icon: "🎯"
    },
    {
      title: "Inclusivity",
      description: "Embracing diversity and promoting equal opportunities",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-8">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vision & Mission
          </h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={200}>
            <div className="bg-background-secondary p-8 rounded-xl h-full card-hover group">
              <div className="flex flex-col h-full">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Our Vision</h2>
                <div className="relative flex-grow">
                  <div className="absolute -top-4 -left-4 text-8xl text-white opacity-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    "
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed relative z-10">
                    To be a globally recognized institution of academic excellence, fostering 
                    innovative research, nurturing entrepreneurial talent, and producing leaders 
                    who contribute to technological advancement and societal well-being.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-background-secondary p-8 rounded-xl h-full card-hover group">
              <div className="flex flex-col h-full">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Our Mission</h2>
                <div className="relative flex-grow">
                  <div className="absolute -top-4 -left-4 text-8xl text-white opacity-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    "
                  </div>
                  <ul className="space-y-4 text-lg text-white/90 relative z-10">
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Provide world-class education through innovative teaching methodologies
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Foster research and development in emerging technologies
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Promote industry collaboration and entrepreneurship
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Develop socially responsible leaders with global perspective
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600}>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background-secondary p-6 rounded-xl card-hover group"
              >
                <div className="text-4xl mb-4 animate-float">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="mt-12 bg-background-secondary p-8 rounded-xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Strategic Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Short Term</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Enhance digital learning infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Strengthen industry partnerships
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Increase research publications
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Long Term</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Achieve global recognition in key research areas
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Establish centers of excellence
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Develop sustainable campus infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default VisionMission;
