import SpeakerTemplate from './SpeakerTemplate';

const SessionChairs = () => {
  const speakers = [
    {
      name: "Dr. Emily Williams",
      title: "Associate Professor",
      institution: "University of California, Berkeley",
      image: "/images/speakers/emily-williams.jpg", // Add actual image path
      bio: "Leading researcher in deep learning architectures and computer vision, with significant contributions to neural network optimization and model interpretability.",
      expertise: [
        "Deep Learning",
        "Neural Networks",
        "Computer Vision",
        "AI Ethics",
        "Model Optimization"
      ],
      keynoteTitle: "Advances in Neural Architecture Search",
      keynoteAbstract: "Exploring automated methods for designing optimal neural network architectures for specific tasks and constraints.",
      publications: [
        {
          title: "Efficient Neural Architecture Search",
          journal: "ICML",
          year: 2024,
          url: "https://example.com/nas-paper"
        },
        {
          title: "Interpretable Deep Learning Models",
          journal: "NeurIPS",
          year: 2023,
          url: "https://example.com/interpretable-dl"
        }
      ],
      awards: [
        {
          title: "Outstanding Young Researcher",
          year: 2023,
          organization: "ACM SIGAI"
        }
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/emilywilliams",
        twitter: "https://twitter.com/emilywilliams_ai"
      }
    },
    {
      name: "Prof. David Lee",
      title: "Head of Cybersecurity Department",
      institution: "Georgia Institute of Technology",
      image: "/images/speakers/david-lee.jpg", // Add actual image path
      bio: "Expert in cybersecurity and privacy-preserving AI, focusing on developing secure and robust AI systems for critical applications.",
      expertise: [
        "Network Security",
        "Cryptography",
        "Privacy-Preserving AI",
        "Secure ML",
        "Blockchain"
      ],
      keynoteTitle: "Securing AI Systems: Challenges and Solutions",
      keynoteAbstract: "Addressing the critical security challenges in AI deployment and presenting novel solutions for robust AI systems.",
      publications: [
        {
          title: "Privacy-Preserving Deep Learning",
          journal: "IEEE Security & Privacy",
          year: 2024,
          url: "https://example.com/privacy-dl"
        },
        {
          title: "Blockchain-based Secure AI",
          journal: "ACM CCS",
          year: 2023,
          url: "https://example.com/blockchain-ai"
        }
      ],
      awards: [
        {
          title: "Cybersecurity Innovation Award",
          year: 2023,
          organization: "IEEE"
        },
        {
          title: "Best Paper Award",
          year: 2022,
          organization: "USENIX Security"
        }
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/davidlee",
        website: "https://davidlee-security.com"
      }
    }
  ];

  return (
    <SpeakerTemplate
      category="Session Chairs"
      description="Meet our distinguished session chairs who are leading groundbreaking discussions and shaping the future of AI security and deep learning"
      speakers={speakers}
    />
  );
};

export default SessionChairs;
