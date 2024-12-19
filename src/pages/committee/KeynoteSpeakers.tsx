import CommitteePage from './CommitteeTemplate';

const keynoteSpeakers = [
  {
    name: "Prof. Erik Cambria",
    title: "Professor",
    organization: "School of Computing and Data Science, NTU Singapore",
    expertise: [
      "Natural Language Processing",
      "Sentiment Analysis",
      "Affective Computing",
      "Deep Learning"
    ]
  },
  {
    name: "Prof. Ali Kashif Bashir",
    title: "Professor, PhD, SMIEEE",
    organization: "Manchester Metropolitan University, UK",
    expertise: [
      "Artificial Intelligence",
      "Internet of Things",
      "Network Security",
      "Cloud Computing"
    ]
  },
  {
    name: "Prof. Ts. Lim Shen Huoy",
    title: "Professor",
    organization: "TARUMT, Malaysia",
    expertise: [
      "Computer Science",
      "Information Technology",
      "AI Applications",
      "Educational Technology"
    ]
  },
  {
    name: "Prof. Kapal Dev",
    title: "Professor",
    organization: "Munster Technological University, Ireland",
    expertise: [
      "Computer Science",
      "Engineering",
      "IoT",
      "Smart Systems"
    ]
  },
  {
    name: "Prof. Chiranjeev Kumar",
    title: "Professor",
    organization: "IIT ISM, Dhanbad, India",
    expertise: [
      "Computer Science",
      "Distributed Systems",
      "High Performance Computing",
      "AI Applications"
    ]
  },
  {
    name: "Prof. Masood H. Siddiqui",
    title: "Professor",
    organization: "Lucknow University, India",
    expertise: [
      "Computer Science",
      "Machine Learning",
      "Data Analytics",
      "AI Applications"
    ]
  }
];

const KeynoteSpeakers = () => {
  return (
    <CommitteePage
      title="Keynote Speakers"
      subtitle="Distinguished experts sharing cutting-edge insights in AI and its applications"
      members={keynoteSpeakers.map(speaker => ({
        ...speaker,
        designation: speaker.title,
        institution: speaker.organization
      }))}
    />
  );
};

export default KeynoteSpeakers;
