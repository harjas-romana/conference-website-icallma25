import CommitteePage from './CommitteeTemplate';

const honoraryChairMembers = [
  {
    name: "Prof. Dr. Geetam Singh Tomar",
    designation: "Chairperson",
    institution: "IEEE, MP Section",
    expertise: ["IEEE Leadership", "Technical Innovation", "Research Excellence"]
  }
];

const HonoraryChair = () => {
  return (
    <CommitteePage
      title="Honorary Chair"
      subtitle="Distinguished leader providing guidance and expertise"
      members={honoraryChairMembers}
    />
  );
};

export default HonoraryChair;
