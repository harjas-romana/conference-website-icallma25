import CommitteePage from './CommitteeTemplate';

const coPatronMembers = [
  {
    name: "Dr. Senthil Kumar Arumugam",
    designation: "Vice Chancellor (I/c)",
    image: "https://vitbhopal.ac.in/wp-content/uploads/2022/09/Pro-VC-Sir_C.jpg",
    institution: "VIT Bhopal University",
    expertise: ["Academic Leadership", "Higher Education Administration"]
  },
  {
    name: "Dr. Debashis Adhikari",
    designation: "Registrar (I/c)",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE1y67GTkINHA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678897215792?e=2147483647&v=beta&t=PQjXZ6Mk8NcKJhQFyPHck7shDWGrfNwCqX0AgPQQSnw",
    institution: "VIT Bhopal University",
    expertise: ["University Administration", "Academic Management"]
  }
];

const CoPatron = () => {
  return (
    <CommitteePage
      title="Co-Patrons"
      subtitle="Distinguished leaders supporting our conference"
      members={coPatronMembers}
    />
  );
};

export default CoPatron;
