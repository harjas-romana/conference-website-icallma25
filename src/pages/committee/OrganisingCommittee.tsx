import CommitteePage from './CommitteeTemplate';

const committees = {
  technicalProgram: {
    title: "Technical Program Committee",
    members: [
      {
        name: "Dr. Musheer Ahmad",
        designation: "Chair",
        institution: "Department of Computer Engineering, Jamia Milia Islamia",
        expertise: ["Technical Program Management"]
      }
    ]
  },

  publication: {
    title: "Publication Committee",
    members: [
      {
        name: "Dr. Ajay Sharma",
        designation: "Lead",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Dheresh Soni",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Aanjan Kumar",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Lokesh Malviya",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  },

  discipline: {
    title: "Discipline Committee",
    members: [
      {
        name: "Dr. I. Jasmine Selvakumari Jeya",
        designation: "Lead",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Chandan Behera",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Vivek Sharma",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Vivek Parashar",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Vikash Panthi",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  },

  sessionManagement: {
    title: "Session Management Committee",
    members: [
      {
        name: "Dr. Gunjan Ansari",
        designation: "Lead",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Mohammad Sultan Alam",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Nitin Kumar Mishra",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Vijay Kumar Trivedi",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  },

  publicity: {
    title: "Advertisement and Publicity Committee",
    members: [
      {
        name: "Dr. L. Satish",
        designation: "Lead",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Anand Motwani",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Jay Prakash Maurya",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Ashfaq Ahmad Najar",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  },

  stageManagement: {
    title: "Stage Management Committee",
    members: [
      {
        name: "Dr. Murugeswari",
        designation: "Lead",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Shilpa Suman",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Antima Jain",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Mrs. Pavithra Rathinavel",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  },

  hospitality: {
    title: "Hospitality Committee",
    members: [
      {
        name: "Dr. N. Kannaiya Raja",
        designation: "Lead",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Vipin Jain",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Monica Sankat",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Jayanthi J.",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Ramraj Dangi",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  },

  workshop: {
    title: "Workshop Committee",
    members: [
      {
        name: "Dr. Balaji A",
        designation: "Lead",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Rajneesh Kumar Patel",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Daood Saleem",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Monica Sankat",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  },

  transport: {
    title: "Transport Committee",
    members: [
      {
        name: "Dr. Kamlesh Chandravanshi",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Ajay Sharma",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Gaurav Soni",
        designation: "Member",
        institution: "VIT Bhopal University"
      },
      {
        name: "Dr. Ravi Verma",
        designation: "Member",
        institution: "VIT Bhopal University"
      }
    ]
  }
};

const OrganizingCommittee = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Organizing Committee
      </h1>
      
      {Object.entries(committees).map(([key, committee]) => (
        <div key={key} className="mb-4">
          <CommitteePage
            title={committee.title}
            subtitle={`${committee.title} Members`}
            members={committee.members}
          />
        </div>
      ))}
    </div>
  );
};

export default OrganizingCommittee;