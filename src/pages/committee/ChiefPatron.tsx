import CommitteePage from './CommitteeTemplate';

const chiefPatronMembers = [
  {
    name: "Dr. G. Viswanathan",
    designation: "Hon'ble Founder & Chancellor",
    image: "https://vitbangalore.in/wp-content/uploads/2023/06/5.G.VISWANATHAN-Chancellor-e1686643660631.jpg",
    institution: "VIT",
    expertise: ["Educational Leadership", "Institution Building", "Higher Education"],
  }
];

const ChiefPatron = () => {
  return (
    <CommitteePage
      title="Chief Patron"
      subtitle="Visionary leadership guiding our conference"
      members={chiefPatronMembers}
    />
  );
};

export default ChiefPatron;
