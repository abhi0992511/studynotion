import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components/core/Dashboard/SideBar';

export const Dashboard = () => {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return <div>Loading...</div>;
  }

  console.log('Dashboard------>>>>>');

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <SideBar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto">
        <div className="w-full max-w-[100%] items-center mx-auto py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
