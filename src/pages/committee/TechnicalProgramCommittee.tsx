import React from 'react';
import CommitteePage from './CommitteeTemplate';

const technicalCommitteeMembers = [
  {
    name: "Dr. Vaibhav Prakash Singh",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Pratishtha Verma",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Jaspal Kaur Saini",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Ankit Kumar Jaiswal",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Deepak Srivastav",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Jani Kuntesh Ketan",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Kanchan Lata Kasyap",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Rupesh Kumar Dewang",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Kanishka Tyagi",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Ayan Mondal",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Shiv Ram Dubey",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Monoj Kumar Muchahari",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Sachikanta Dash",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. K Abhimanyu Patro",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Saurav Arora",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Ramamani Tripathy",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Ashwini Kumar Pradhan",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Abhishek Sethy",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Hitesh Mohapatra",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Mohd. Shuib",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Nisha Chourasia",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Ankur Goyal",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Amiya Ranjan Panda",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Anuja Kumar Acharya",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Shailendra Pratap Singh",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Shalu Sharma",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Vikash Kumar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Dileep Kumar Yadav",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Manoj Kumar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Sunil Kumar Bharati",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Akash Sinha",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Shipra Swati",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Anita Murmu",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Gulshan Shrivastava",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Yajanaseni Dash",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Shiv Naresh Shivahre",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Prashant Kumar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Himani Bansal",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Shashank Awasthi",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Anil Kumar Sagar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Vaibhav K Khatavkar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. A Baseera",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Ashok Patel",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Amit Kumar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Anjali Mathur",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Bandla Pavan Babu",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. G.R. Hemalakshmi",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. J. Manikandan",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Jitendra P.S. Mathur",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. K R. Sivabalan",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Kannan Shanmugam",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. M. Maragatharajan",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Nilesh Kunhare",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Nirmala E",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. R. Senthil Kumar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Rahul Shrivastava",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Ramraj Dangi",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Santosh Kumar Sahoo",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Shafiul Amol Ahmed",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Suneet Joshi",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Vijendra Singh Bramhe",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Dr. Vivek Parashar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. Ajeet Singh",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. Ashfaq Ahmad Najar",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. Chour Singh Rajpoot",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. G Ganesan",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. Javed Khan Sheikh",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. Sanat Jain",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. Suresh M",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. T. Venkateswara Rao",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mr. Vishal Singh Bhati",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Mrs. Pavithra Rathinavel",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  },
  {
    name: "Ms. Manorama Chouhan",
    designation: "Technical Program Committee Member",
    institution: "VIT Bhopal University"
  }
];

const TechnicalProgramCommittee = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Technical Program Committee
      </h1>

      <CommitteePage
        title="Technical Program Committee Members"
        subtitle="Distinguished experts ensuring technical excellence and research quality"
        members={technicalCommitteeMembers}
      />
    </div>
  );
};

export default TechnicalProgramCommittee;
