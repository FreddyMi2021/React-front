import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { STUDENT_X_PATHS_BY_STUDENT_ID } from '../../../services/queries/StudentXPathQueries'; //'../../../services/queries/StudentXPathQueries';
import { HiMenu } from 'react-icons/hi';
import Activity from './contents/Activity/Activity';

import Parkour from './contents/Parkour/Parkour';
import Project from './contents/Project/Project';

import './Styles/Menu.css';
import { decryptUser } from '../../../services/BaseUrl';
const currentUser = decryptUser(localStorage.getItem('currentUser'));

const TabsComponent = (props) => {
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full ">
          <ul
            className="flex mb-0 list-none overflow-y-hidden flex-row overflow-x-scroll  md:overflow-hidden"
            role="tablist"
          >
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 space-y-1 leading-normal ' +
                  (props.openTab === 1
                    ? 'text-gray-50 bg-' + props.color + '-700'
                    : 'text-' + props.color + '-500 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <span className="flex justify-center items-center text-center">
                  <HiMenu
                    className="flex justify-center items-center text-center"
                    size="2rem"
                  />
                </span>
                <span className="block tracking-widest uppercase">activities</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (props.openTab === 2
                    ? 'text-gray-50 bg-' + props.color + '-700'
                    : 'text-' + props.color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {props.countParkou ? props.countParkou : '0'}
                </span>
                <span className="block tracking-widest uppercase">paths</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (props.openTab === 3
                    ? 'text-gray-50 bg-' + props.color + '-700'
                    : 'text-' + props.color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {props.countProject ? props.countProject : 0}
                </span>
                <span className="block tracking-widest uppercase">projects</span>
              </a>
            </li>
            
          </ul>
          <div className="relative  h-auto flex flex-auto min-w-0 break-words bg-white w-full mb-6">
            <div className="py-5 flex-auto ">
              <div className="tab-content tab-space">
                <div className={props.openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <Activity />
                </div>
                <div className={props.openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <Parkour count = {props.setCountParkour} />
                </div>
                <div className={props.openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <Project count={props.setCountProject} />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tabs = ({ color }) => {
  const [countParkou, setCountParkour] = useState(0);
  const [countProject, setCountProject] = useState(0);
  const [openTab, setOpenTab] = React.useState(1);

  const { loading: SXPLoading, error: SXPError, data: SXPData } = useQuery(
    STUDENT_X_PATHS_BY_STUDENT_ID(JSON.parse(currentUser).data.data.id)
  );

  return (
    <>
      <TabsComponent
        color={ color }
        openTab={ openTab } 
        setOpenTab={ setOpenTab } 
        SXPData={ SXPData ? SXPData.studentXPathsByStudentId : null } 
        countProject = {countProject}
        countParkou = { countParkou }
        setCountProject = {setCountProject}
        setCountParkour = {setCountParkour}
      />
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="green" />
    </>
  );
}
