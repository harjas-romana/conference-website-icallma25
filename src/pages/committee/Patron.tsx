import CommitteePage from './CommitteeTemplate';

const patronMembers = [
  {
    name: "Mr. Sankar Viswanathan",
    designation: "Vice President",
    image: "https://vitbhopal.ac.in/wp-content/uploads/2020/01/vpa_small-1.jpg",
    institution: "VIT",
    expertise: ["Educational Administration", "Strategic Leadership"]
  },
  {
    name: "Ms. Kadhambari S. Viswanathan",
    designation: "Assistant Vice President",
    image: "https://vitbhopal.ac.in/wp-content/uploads/2020/01/avp-1.jpg",
    institution: "VIT",
    expertise: ["Academic Leadership", "Educational Innovation"]
  }
];

const Patron = () => {
  return (
    <CommitteePage
      title="Patrons"
      subtitle="Distinguished leaders providing vision and guidance"
      members={patronMembers}
    />
  );
};

export default Patron;
