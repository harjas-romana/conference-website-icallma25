import React from 'react';
import './WhoShouldJoin.css';

const WhoShouldJoin: React.FC = () => {
  return (
    <div className="who-should-join">
      <h1 className="title">Who Should Join</h1>
      <p className="description">
        The ICALLMA 2025 conference is designed for a diverse audience, including:
      </p>
      <ul>
        <li>Researchers and Academics in the field of AI and LLMs</li>
        <li>Industry Professionals working with AI technologies</li>
        <li>Students and Early Career Researchers interested in LLMs</li>
        <li>Policy Makers and Ethics Experts focusing on AI implications</li>
        <li>Anyone interested in the latest advancements in AI and its applications</li>
      </ul>
    </div>
  );
};

export default WhoShouldJoin;
