import CommitteePage from './CommitteeTemplate';

const generalChairs = [
  {
    name: "Dr. S. Poonkuntran",
    designation: "Executive Dean",
    institution: "VIT Bhopal University",
    expertise: ["Academic Leadership", "Executive Management"],
  },
  {
    name: "Dr. Pushpendra Singh Patheja",
    designation: "Dean",
    institution: "School of Computing Science and Engineering, VIT Bhopal University",
    expertise: ["Computing Science", "Engineering Education"],
  },
  {
    name: "Dr. Pon Harshavardhanan",
    designation: "Dean",
    institution: "School of Computing Science and Artificial Intelligence, VIT Bhopal University",
    expertise: ["Computing Science", "Artificial Intelligence"],
  }
];

const GeneralChairs = () => {
  return (
    <CommitteePage
      title="General Chairs"
      subtitle="Leading experts steering the conference towards excellence"
      members={generalChairs}
    />
  );
};

export default GeneralChairs;
