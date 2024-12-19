import SpeakerTemplate from './SpeakerTemplate';

const GuestSpeakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Professor of Computer Science",
      institution: "Stanford University",
      image: "/images/speakers/sarah-johnson.jpg", // Add actual image path
      bio: "Dr. Johnson is a leading researcher in AI and machine learning, with groundbreaking contributions to healthcare applications. Her work focuses on developing interpretable AI models for medical diagnosis.",
      expertise: [
        "Healthcare AI",
        "Machine Learning",
        "Neural Networks",
        "Medical Imaging",
        "Predictive Analytics"
      ],
      keynoteTitle: "AI Revolution in Healthcare: From Diagnosis to Treatment",
      keynoteAbstract: "Exploring how artificial intelligence is transforming healthcare delivery, improving diagnostic accuracy, and enabling personalized treatment plans.",
      publications: [
        {
          title: "Deep Learning in Medical Image Analysis",
          journal: "Nature Medicine",
          year: 2024,
          url: "https://example.com/publication1"
        },
        {
          title: "AI-Driven Healthcare: Current Trends and Future Prospects",
          journal: "Medical AI Journal",
          year: 2023,
          url: "https://example.com/publication2"
        }
      ],
      awards: [
        {
          title: "Healthcare Innovation Award",
          year: 2023,
          organization: "American Medical Association"
        },
        {
          title: "Outstanding Research Contribution",
          year: 2022,
          organization: "IEEE Medicine"
        }
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        website: "https://sarahjohnson.ai"
      }
    },
    {
      name: "Prof. Michael Chen",
      title: "Director of Quantum Computing",
      institution: "MIT",
      image: "/images/speakers/michael-chen.jpg", // Add actual image path
      bio: "Prof. Chen is pioneering the integration of quantum computing with artificial intelligence, leading breakthrough research in quantum machine learning algorithms.",
      expertise: [
        "Quantum Computing",
        "Quantum ML",
        "Algorithm Design",
        "Computational Physics",
        "AI Systems"
      ],
      keynoteTitle: "Quantum Computing: The Next Frontier in AI",
      keynoteAbstract: "Discover how quantum computing is set to revolutionize AI capabilities, enabling unprecedented computational power for complex problem-solving.",
      publications: [
        {
          title: "Quantum Algorithms for Machine Learning",
          journal: "Science",
          year: 2024,
          url: "https://example.com/quantum-ml"
        },
        {
          title: "The Future of Quantum AI",
          journal: "Nature Quantum",
          year: 2023,
          url: "https://example.com/quantum-future"
        }
      ],
      awards: [
        {
          title: "Quantum Computing Excellence",
          year: 2023,
          organization: "Quantum Computing Institute"
        }
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/michaelchen",
        website: "https://michaelchen-quantum.ai"
      }
    }
  ];

  return (
    <SpeakerTemplate
      category="Distinguished Guest Speakers"
      description="Join us in welcoming world-renowned experts who are pushing the boundaries of AI and quantum computing, sharing their groundbreaking research and insights"
      speakers={speakers}
    />
  );
};

export default GuestSpeakers;
