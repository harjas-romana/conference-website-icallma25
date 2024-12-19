import CommitteePage from './CommitteeTemplate';

const chiefConvenorMembers = [
  {
    name: "Dr. Sandip Mal",
    designation: "Chief Convenor",
    institution: "VIT Bhopal University",
    expertise: ["Conference Organization", "Research Leadership"]
  }
];

const ChiefConvenor = () => {
  return (
    <CommitteePage
      title="Chief Convenor"
      subtitle="Leading the conference organization and execution"
      members={chiefConvenorMembers}
    />
  );
};

export default ChiefConvenor;
