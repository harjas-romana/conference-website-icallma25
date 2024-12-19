import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  contributions: string[];
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Harjas Partap Singh Romana",
    role: "Lead Developer",
    image: "https://via.placeholder.com/400x400",
    bio: "Full-stack developer with a passion for creating beautiful and functional web applications.",
    contributions: [
      "Website Architecture",
      "Frontend Development",
      "UI/UX Design",
      "Performance Optimization"
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Git"
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "nick@example.com",
      website: "https://example.com"
    }
  },
  // Add more team members if needed
];

const technologies = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces"
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript that compiles to plain JavaScript"
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development"
  },
  {
    name: "Vite",
    description: "Next generation frontend tooling"
  }
];

const DesignedBy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meet the Development Team
          </h1>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            The talented individuals behind the design and development of this website
          </p>
        </AnimatedSection>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="card group hover:shadow-xl">
                <div className="p-6">
                  <div className="md:flex gap-6">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white/90 px-4 py-2 rounded-full shadow-lg">
                          {member.social.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-secondary hover:text-primary-blue transition-colors duration-300"
                            >
                              <FaGithub />
                            </a>
                          )}
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-secondary hover:text-primary-blue transition-colors duration-300"
                            >
                              <FaLinkedin />
                            </a>
                          )}
                          {member.social.email && (
                            <a
                              href={`mailto:${member.social.email}`}
                              className="text-text-secondary hover:text-primary-blue transition-colors duration-300"
                            >
                              <FaEnvelope />
                            </a>
                          )}
                          {member.social.website && (
                            <a
                              href={member.social.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-secondary hover:text-primary-blue transition-colors duration-300"
                            >
                              <FaGlobe />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {member.name}
                          </h3>
                          <p className="text-primary-blue font-medium">
                            {member.role}
                          </p>
                        </div>

                        <p className="text-text-secondary">
                          {member.bio}
                        </p>

                        <div>
                          <h4 className="text-lg font-semibold text-text-primary mb-2">
                            Key Contributions
                          </h4>
                          <ul className="space-y-1">
                            {member.contributions.map((contribution, i) => (
                              <li key={i} className="flex items-start text-text-secondary">
                                <span className="text-primary-blue mr-2">•</span>
                                {contribution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-text-primary mb-2">
                            Skills & Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-accent-light text-primary-blue rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Technologies Used */}
        <AnimatedSection delay={300}>
          <div className="card p-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Technologies Used
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-accent-light rounded-lg text-center animate-pop-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold text-primary-blue mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Project Information */}
        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <p className="text-text-secondary max-w-3xl mx-auto">
              This website was developed with a focus on user experience,
              performance, and accessibility. We utilized modern web technologies
              and best practices to create a seamless and engaging platform for
              conference attendees.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DesignedBy;
