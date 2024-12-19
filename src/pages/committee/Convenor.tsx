import CommitteePage from './CommitteeTemplate';

const convenorMembers = [
  {
    name: "Dr. Preetam Suman",
    designation: "Convenor",
    institution: "VIT Bhopal University",
    expertise: ["Conference Management", "Research Coordination"]
  },
  {
    name: "Dr. Sasmita Padhy",
    designation: "Convenor",
    institution: "VIT Bhopal University",
    expertise: ["Event Organization", "Academic Coordination"]
  },
  {
    name: "Dr. Ram Kumar",
    designation: "Convenor",
    institution: "VIT Bhopal University",
    expertise: ["Conference Planning", "Research Management"]
  },
  {
    name: "Dr. Shahab Saquib Sohail",
    designation: "Convenor",
    institution: "VIT Bhopal University",
    expertise: ["Event Management", "Academic Organization"]
  }
];

const Convenor = () => {
  return (
    <CommitteePage
      title="Convenors"
      subtitle="Dedicated leaders orchestrating the conference experience"
      members={convenorMembers}
    />
  );
};

export default Convenor;
