import React from 'react';
import { Committee } from '../components/Committee'

export const CommitteePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Committee
        </h1>
        <Committee />
      </div>
    </div>
  );
};
