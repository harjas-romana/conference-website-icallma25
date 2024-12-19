import CommitteeTemplate from './CommitteeTemplate';

const AdvisoryBoard = () => {
  const members = [
    {
      name: "Prof. John Smith",
      designation: "Advisory Board Chair",
      institution: "Imperial College London, UK",
      bio: "Distinguished researcher in AI Ethics and Governance",
    },
    {
      name: "Prof. Maria Rodriguez",
      designation: "Senior Advisor",
      institution: "University of Toronto, Canada",
      bio: "Expert in AI Applications in Healthcare",
    },
    // Add more advisory board members as needed
  ];

  return (
    <CommitteeTemplate
      title="Advisory Board"
      subtitle="Experienced leaders providing strategic guidance and oversight"
      members={members}
    />
  );
};

export default AdvisoryBoard; 