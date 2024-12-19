import SpeakerTemplate from './SpeakerTemplate';

const KeynoteSpeaker = () => {
  const speakers = [
    {
      name: "Prof. Erik Cambria",
      title: "Professor",
      institution: "School of Computing and Data Science, NTU Singapore",
      expertise: [
        "Natural Language Processing",
        "Sentiment Analysis",
        "Affective Computing",
        "Deep Learning"
      ],
      keynoteTitle: "Advances in Natural Language Processing and Sentiment Analysis",
      keynoteAbstract: "Exploring the latest developments in NLP and sentiment analysis, focusing on affective computing and deep learning applications."
    },
    {
      name: "Prof. Ali Kashif Bashir",
      title: "Professor, PhD, SMIEEE",
      institution: "Manchester Metropolitan University, UK",
      expertise: [
        "Artificial Intelligence",
        "Internet of Things",
        "Network Security",
        "Cloud Computing"
      ],
      keynoteTitle: "AI and IoT Integration in Modern Computing",
      keynoteAbstract: "Discussing the convergence of AI and IoT technologies, with focus on security and cloud computing applications."
    },
    {
      name: "Prof. Ts. Lim Shen Huoy",
      title: "Professor",
      institution: "TARUMT, Malaysia",
      expertise: [
        "Computer Science",
        "Information Technology",
        "AI Applications",
        "Educational Technology"
      ],
      keynoteTitle: "AI Applications in Educational Technology",
      keynoteAbstract: "Exploring innovative applications of AI in education and learning technologies."
    },
    {
      name: "Prof. Kapal Dev",
      title: "Professor",
      institution: "Munster Technological University, Ireland",
      expertise: [
        "Computer Science",
        "Engineering",
        "IoT",
        "Smart Systems"
      ],
      keynoteTitle: "Smart Systems and IoT Integration",
      keynoteAbstract: "Examining the development and implementation of smart systems with IoT integration."
    },
    {
      name: "Prof. Chiranjeev Kumar",
      title: "Professor",
      institution: "IIT ISM, Dhanbad, India",
      expertise: [
        "Computer Science",
        "Distributed Systems",
        "High Performance Computing",
        "AI Applications"
      ],
      keynoteTitle: "High Performance Computing in AI",
      keynoteAbstract: "Discussing the role of high-performance computing in modern AI applications and distributed systems."
    },
    {
      name: "Prof. Masood H. Siddiqui",
      title: "Professor",
      institution: "Lucknow University, India",
      expertise: [
        "Computer Science",
        "Machine Learning",
        "Data Analytics",
        "AI Applications"
      ],
      keynoteTitle: "Machine Learning and Data Analytics",
      keynoteAbstract: "Exploring current trends in machine learning and their applications in data analytics."
    }
  ];

  return (
    <SpeakerTemplate
      category="Keynote Speakers"
      description="Join us for transformative insights from world-renowned experts in AI, Machine Learning, and their applications across various domains. Our distinguished keynote speakers bring decades of experience and groundbreaking research to share with our community."
      speakers={speakers.map(speaker => ({
        ...speaker,
        image: "/images/placeholder-speaker.jpg", // Add default image
        bio: speaker.keynoteAbstract // Use keynote abstract as bio
      }))}
    />
  );
};

export default KeynoteSpeaker;
