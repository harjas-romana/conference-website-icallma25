import React from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h1 className="title">Frequently Asked Questions</h1>
      <h2 className="question">What is ICALLMA 2025?</h2>
      <p className="answer">
        ICALLMA 2025 is the 1st International Conference on Advancement in Large Language Models and Applications, focusing on the latest developments and applications of LLMs across various domains.
      </p>
      <h2 className="question">Who can participate?</h2>
      <p className="answer">
        The conference is open to researchers, industry professionals, students, and anyone interested in AI and its applications.
      </p>
      <h2 className="question">How can I submit my paper?</h2>
      <p className="answer">
        Detailed submission guidelines will be provided on the conference website. Please check back for updates.
      </p>
      <h2 className="question">What are the key dates?</h2>
      <p className="answer">
        Key dates including submission deadlines and conference dates will be announced on the website.
      </p>
    </div>
  );
};

export default FAQ;
