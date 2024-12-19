import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';

const Institution: React.FC = () => {
  const highlights = [
    {
      title: "Academic Excellence",
      description: "Ranked among top engineering institutions with NAAC A++ accreditation",
      icon: "🎓"
    },
    {
      title: "Research Focus",
      description: "State-of-the-art research facilities and collaborations with leading institutions",
      icon: "🔬"
    },
    {
      title: "Industry Connect",
      description: "Strong industry partnerships and placement opportunities",
      icon: "🤝"
    },
    {
      title: "Global Network",
      description: "International collaborations with renowned universities worldwide",
      icon: "🌍"
    }
  ];

  const stats = [
    { label: "Students", value: "10,000+" },
    { label: "Faculty Members", value: "500+" },
    { label: "Research Papers", value: "1000+" },
    { label: "Patents Filed", value: "100+" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-8">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About VIT Bhopal University
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-background-secondary p-8 rounded-xl mb-12">
            <p className="text-lg text-white leading-relaxed">
              VIT Bhopal University is a premier institution committed to excellence in education, 
              research, and innovation. Established with a vision to provide world-class education, 
              we nurture talent and create leaders who shape the future of technology and society.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={300 + index * 100}>
              <div className="bg-background-secondary p-6 rounded-xl text-center card-hover">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{stat.value}</h3>
                <p className="text-white">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <AnimatedSection key={index} delay={400 + index * 100}>
              <div className="bg-background-secondary p-6 rounded-xl card-hover">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl animate-float">{highlight.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-white">{highlight.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={800}>
          <div className="bg-background-secondary p-8 rounded-xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Our Legacy</h2>
            <div className="prose prose-lg text-white">
              <p>
                Since its inception, VIT Bhopal has been at the forefront of technological education 
                and innovation. Our commitment to academic excellence, research, and industry 
                collaboration has established us as a leading institution in India.
              </p>
              <p>
                With state-of-the-art facilities, distinguished faculty, and a vibrant campus life, 
                we provide an environment that fosters creativity, innovation, and personal growth. 
                Our alumni network spans across the globe, making significant contributions in 
                various fields.
              </p>
              <p>
                We continue to evolve and adapt to the changing needs of the industry while 
                maintaining our core values of excellence, innovation, and social responsibility.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Institution;
