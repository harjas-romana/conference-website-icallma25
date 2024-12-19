import CommitteePage from './CommitteeTemplate';

const steeringCommitteeMembers = [
  {
    name: "Dr. R. Senthil Kumar",
    designation: "Steering Committee Member",
    institution: "VIT Bhopal University",
    expertise: ["Research Management", "Academic Leadership"]
  },
  {
    name: "Dr. L. Velmurugan",
    designation: "Steering Committee Member",
    institution: "VIT Bhopal University",
    expertise: ["Research Coordination", "Academic Planning"]
  },
  {
    name: "Dr. Murrugeswari",
    designation: "Steering Committee Member",
    institution: "VIT Bhopal University",
    expertise: ["Research Development", "Academic Strategy"]
  },
  {
    name: "Dr. Gunjan Ansari",
    designation: "Steering Committee Member",
    institution: "VIT Bhopal University",
    expertise: ["Research Organization", "Academic Direction"]
  },
  {
    name: "Dr. Ajay Sharma",
    designation: "Steering Committee Member",
    institution: "VIT Bhopal University",
    expertise: ["Research Planning", "Academic Guidance"]
  }
];

const SteeringCommittee = () => {
  return (
    <CommitteePage
      title="Steering Committee"
      subtitle="Distinguished members guiding the conference direction and strategy"
      members={steeringCommitteeMembers}
    />
  );
};

export default SteeringCommittee;
