import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { FaChartLine, FaLightbulb, FaUsers, FaGlobe } from 'react-icons/fa';

interface ResearchTrack {
  title: string;
  description: string;
  topics: string[];
  paperCount: number;
  icon: React.ReactNode;
}

const researchTracks: ResearchTrack[] = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Exploring cutting-edge AI technologies and machine learning algorithms.",
    topics: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Neural Networks"
    ],
    paperCount: 45,
    icon: <FaLightbulb className="text-4xl text-primary-blue" />
  },
  {
    title: "Cybersecurity & Privacy",
    description: "Advanced research in security protocols and privacy preservation.",
    topics: [
      "Network Security",
      "Cryptography",
      "Privacy-Preserving Computing",
      "Blockchain Security",
      "IoT Security"
    ],
    paperCount: 38,
    icon: <FaUsers className="text-4xl text-primary-blue" />
  },
  {
    title: "Cloud Computing & Big Data",
    description: "Innovation in cloud architectures and big data analytics.",
    topics: [
      "Cloud Infrastructure",
      "Big Data Analytics",
      "Distributed Systems",
      "Edge Computing",
      "Data Mining"
    ],
    paperCount: 42,
    icon: <FaGlobe className="text-4xl text-primary-blue" />
  },
  {
    title: "Emerging Technologies",
    description: "Research in breakthrough technologies shaping the future.",
    topics: [
      "Quantum Computing",
      "5G/6G Networks",
      "Internet of Things",
      "Augmented Reality",
      "Robotics"
    ],
    paperCount: 35,
    icon: <FaChartLine className="text-4xl text-primary-blue" />
  }
];

interface Statistic {
  value: string;
  label: string;
  description: string;
}

const statistics: Statistic[] = [
  {
    value: "160+",
    label: "Research Papers",
    description: "High-quality research papers accepted for presentation"
  },
  {
    value: "40+",
    label: "Countries",
    description: "International participation from researchers worldwide"
  },
  {
    value: "85%",
    label: "Acceptance Rate",
    description: "Rigorous peer review process ensuring quality"
  },
  {
    value: "4.8/5",
    label: "Review Score",
    description: "Average rating from previous conference attendees"
  }
];

const Research: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-4 gradient-text">
            Research Tracks & Publications
          </h1>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            Discover groundbreaking research across various domains of technology
            and innovation
          </p>
        </AnimatedSection>

        {/* Research Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {researchTracks.map((track, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="card group hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-light rounded-lg">
                      {track.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold gradient-text">
                          {track.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary-blue text-white rounded-full text-sm">
                          {track.paperCount} Papers
                        </span>
                      </div>
                      <p className="text-text-secondary mb-4">
                        {track.description}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">
                          Key Topics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {track.topics.map((topic, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-accent-light text-primary-blue rounded-full text-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Statistics */}
        <AnimatedSection delay={300}>
          <div className="card p-8 mb-16">
            <h2 className="text-2xl font-bold text-center gradient-text mb-8">
              Research Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 border-b-2 border-primary-blue/20 lg:border-b-0 lg:border-r-2 last:border-0"
                >
                  <div className="text-3xl font-bold gradient-text mb-2 animate-pop-in">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-1">
                    {stat.label}
                  </div>
                  <p className="text-text-secondary text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Publication Process */}
        <AnimatedSection delay={400}>
          <div className="card p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">
              Publication Process
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Submission Guidelines
                </h3>
                <p className="text-text-secondary">
                  All submissions undergo a rigorous double-blind peer review process.
                  Papers must be original and not previously published. Authors are
                  required to follow the conference template and formatting guidelines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Review Process
                </h3>
                <p className="text-text-secondary">
                  Each paper is reviewed by at least three experts in the field.
                  Reviews are based on originality, technical soundness, presentation
                  quality, and relevance to the conference themes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Publication Opportunities
                </h3>
                <p className="text-text-secondary">
                  Accepted papers will be published in the conference proceedings
                  and indexed in major digital libraries. Selected papers may be
                  invited for publication in special issues of renowned journals.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Research;
