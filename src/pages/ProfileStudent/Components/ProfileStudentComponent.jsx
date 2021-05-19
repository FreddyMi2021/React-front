import React from 'react';
import ProfileHeader from './Header/ProfileHeader';
import TabsRender from './Menu';

const ProfileSTudentComponent = () => {
  return (
    <>
      <div className="pt-3 py-6 block overflow-auto z-10 h-screen md:overflow-hidden md:flex flex-grid px-6 pb-32">
        <div className="w-full md:w-1/4">
          <ProfileHeader />
        </div>
        <div className="w-full relative md:pl-4 md:w-3/4">
          <TabsRender />
        </div>
      </div>
    </>
  );
};

export default ProfileSTudentComponent;
