import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-semibold">Welcome to WeUpSkill</h1>
        <p className="mt-4 text-xl">Enhance your skills with top-rated courses</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;
