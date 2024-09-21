import React from "react";

const Dashboard = ({ menuVisible }) => {
  return (
    <div
      className={`transition-transform duration-500 ease-in-out ${
        menuVisible ? "translate-x-[-250px]" : "translate-x-0"
      }`}
    >
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        {/* Your dashboard content goes here */}
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;
