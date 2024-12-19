import CommitteePage from './CommitteeTemplate';

const programChairMembers = [
  {
    name: "Prof. R. Shriram",
    designation: "Professor",
    institution: "VIT Bhopal University",
    expertise: ["Program Management", "Academic Leadership"]
  },
  {
    name: "Dr. S. Ananthakumaran",
    designation: "Associate Professor",
    institution: "VIT Bhopal University",
    expertise: ["Technical Program Management", "Research Coordination"]
  },
  {
    name: "Dr. Naween Kumar",
    designation: "Professor",
    institution: "Bennett University, Noida",
    expertise: ["Program Organization", "Academic Research"]
  }
];

const ProgramChair = () => {
  return (
    <CommitteePage
      title="Program Chairs"
      subtitle="Leading experts overseeing the conference's technical program and content"
      members={programChairMembers}
    />
  );
};

export default ProgramChair;
