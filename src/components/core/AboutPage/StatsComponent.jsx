import React from "react";

export const StatsComponent = () => {
  const statsData = [
    { count: "5K", label: "Active Students" },
    { count: "10+", label: "Mentors" },
    { count: "200+", label: "Courses" },
    { count: "50+", label: "Awards" },
  ];

  return (
    <div className="w-full flex justify-center mt-20 mb-10 bg-richblack-700 px-4">
      <div className="w-full max-w-screen-lg flex justify-between p-10 gap-8">
        {statsData.map((stats, index) => {
          return (
            <div
              className="flex flex-col gap-y-2 rounded-lg bg-gradient-to-r from-blue-400 to-teal-500 text-white p-5 items-center shadow-lg transform transition-transform hover:scale-105"
              key={index}
            >
              <h1 className="text-5xl font-bold">{stats.count}</h1>
              <p className="text-xl font-medium">{stats.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
