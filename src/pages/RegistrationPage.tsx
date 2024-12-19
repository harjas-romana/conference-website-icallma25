import React from 'react';
import { Registration } from '../components/Registration';

export const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Registration
        </h1>
        <Registration />
      </div>
    </div>
  );
};
