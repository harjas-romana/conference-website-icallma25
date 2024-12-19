import React from 'react';
import './CallForPapers.css';

const CallForPapers: React.FC = () => {
  return (
    <div className="call-for-papers">
      <h1 className="title">Call for Papers</h1>
      <p className="description">
        ICALLMA 2025 invites original research papers, surveys, and technical reports that contribute to the advancement of LLMs. With an emphasis on real-world applications and scalability, the conference will explore new models, algorithms, architectures, and frameworks. Participants are encouraged to present novel ideas, share case studies, and discuss the ethical implications of LLMs in diverse fields. The event will feature keynote speeches from prominent figures in the field, technical sessions, panel discussions, and workshops to foster collaboration and innovation in this rapidly growing domain.
      </p>
      <h2 className="submission-details">Submission Details:</h2>
      <ul>
        <li>All submissions must be original and not under consideration elsewhere.</li>
        <li>Submissions should be in the format specified on the conference website.</li>
        <li>Accepted papers will be published in the conference proceedings.</li>
      </ul>
    </div>
  );
};

export default CallForPapers;
