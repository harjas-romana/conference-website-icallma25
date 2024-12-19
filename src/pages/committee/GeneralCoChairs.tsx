import CommitteePage from './CommitteeTemplate';

const generalCoChairs = [
  {
    name: "Prof. Amir Hussain",
    designation: "Professor",
    institution: "School of Computing, Edinburgh Napier University, Scotland, UK",
    expertise: ["Computing Science", "International Research", "Academic Leadership"]
  }
];

const GeneralCoChairs = () => {
  return (
    <CommitteePage
      title="General Co-Chairs"
      subtitle="Distinguished leaders coordinating the conference direction"
      members={generalCoChairs}
    />
  );
};

export default GeneralCoChairs;
