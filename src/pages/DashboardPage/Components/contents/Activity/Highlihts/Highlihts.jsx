import React, {useState, useRef, useEffect} from 'react';

import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdTrophy, IoMdStar} from 'react-icons/io';
import { GiTrophyCup, GiGraduateCap, GiJeweledChalice,  GiClubs, GiEagleEmblem } from "react-icons/gi";


import './Styles/Accordion.css';
import Chevron from './Components/Chevron/Chevron';

import Axios from 'axios';
import { decryptUser } from '../../../../../../services/BaseUrl';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};

const Highliht = () => {

  const [ totalXp, setTotalXp ] = useState(0)
  const [ achievedProjects, setAchievedProjects ] = useState(null)
  let score = 0
  
  const getStudentProjects = (studentHexId) => {
    Axios.get(
      'https://school-api.sayna.io/hex/students/' + studentHexId + '/projects',
      {
        headers: {
          uid: currentUser.authData.uid,
          client: currentUser.authData.client,
          'access-token': currentUser.authData['access-token'],
        },
      }
    ).then((res) => {
      if(res.data.errors === undefined && achievedProjects === null) {

        let achievedItems = res.data.items.filter( item => item.completion !== 0.0 )
        
        res.data.items.map(p => {
          if(p.score !== null) {
            score += p.score
          }
          // setProjectsName(p.name)
        })

        setTotalXp(score)
        setAchievedProjects(achievedItems)
      }
    });
  };

  useEffect(() => {
    if(currentUser.data.data.hex_id !== null && currentUser.data.data.hex_id !== undefined && achievedProjects === null){
      getStudentProjects(currentUser.data.data.hex_id)
    }
  });

  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('accordion_icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActive(active === '' ? 'active' : '');
    setHeight(
      active === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotate(active === 'active' ? 'accordion_icon' : 'accordion_icon rotate');
  }

  return (
    <>
      <div className='w-full mt-8 mx-auto px-6 border-gray-500 shadow-lg'>
        <div className='bg-white block border-b-2 py-2 border-gray-400'>
          <div className='bg-white block text-center md:text-left'>
            <label className=' mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300'>
              BASIC STATISTICS
            </label>
          </div>
          <div className='space-y-2 mt-4'>
            <div className='text-gray-500 space-x-4'>
              <IoMdStar className='inline' size='1.5em' />
              <span classname='text-gray-500'>
                Total XP:&nbsp;
                <b className='text-green-500'>{totalXp} XP</b>
              </span>
            </div>

            <div className='text-gray-500 space-x-4'>
              <IoMdTrophy className='inline' size='1.5em' />
              <span>
                Range: <b className='text-green-500 font-bold'>{0}</b>
              </span>
            </div>
          </div>
        </div>

        <div className='py-4 space-y-3'>
          <div>
            <label className='text-gray-500 text-lg'>Badges</label>
          </div>

          <div className='accordion_section'>
            <div className='accordion'>
              <div className='accordion_title space-x-2'>
                <div
                  className={`w-14 h-14 cursor-pointer inline-block rounded-full bg-gray-300 text-gray-600 text-center ${active}`}
                  style={{ lineHeight: '3.5rem' }}
                  onClick={toggleAccordion}
                >
                  <FiMoreHorizontal className='inline' size='2em' />
                </div>
              </div>
              <Chevron
                className={`${rotate}`}
                size={'1.5em'}
                color={'#444'}
                position={'right'}
              />
            </div>

            <div
              ref={content}
              style={{maxHeight:`${height}`}}
              className="accordion_content">
              
                  {
                  achievedProjects !== null ? (
                      <>
                      {
                        achievedProjects.map( item => (
                          
                          <div className='mt-4 p-6 w-full justify-items-auto'>
                            <div className='w-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10'>
                                {
                                  item.completion < 25 ? (
                                      <div className='text-center m-auto hover:shadow p-2'>
                                          <div className="w-full">
                                            <p className="font-extrabold text-center text-purple-500">{ item.completion }&nbsp;%</p>
                                          </div>
                                          <div className='w-24 h-24 bg-purple-500 text-center'>
                                            <div
                                                className='font-bold text-lg text-white font-bold'
                                                style={{ lineHeight: '6rem' }}
                                            >
                                                <GiGraduateCap size="4em" className="inline" />
                                            </div>
                                          </div>
                                          <div className="w-full text-center">
                                            <label className="text-purple-500 font-bold text-sm">{item.name.split(". ")[1]}</label>
                                          </div>
                                      </div>
                                  ):(
                                    <>
                                      {
                                        item.completion >= 25 && item.completion < 50 ? (
                                          <div className='text-center m-auto hover:shadow p-2'>
                                              <div className="w-full">
                                                <p className="font-extrabold text-center text-purple-700">{ item.completion }&nbsp;%</p>
                                              </div>
                                              <div className='w-24 h-24 bg-purple-700 text-center'>
                                                <div
                                                    className='font-bold text-lg text-white font-bold'
                                                    style={{ lineHeight: '6rem' }}
                                                >
                                                    <GiClubs size="4em" className="inline" />
                                                </div>
                                              </div>
                                              <div className="w-full text-center">
                                                <label className="text-purple-700 font-bold text-sm">{item.name.split(". ")[1]}</label>
                                              </div>
                                          </div>
                                        ):(
                                          <>
                                            {
                                              item.completion >= 50 && item.completion < 75 ? (
                                                <div className='text-center m-auto hover:shadow p-2'>
                                                    <div className="w-full">
                                                        <p className="font-extrabold text-center text-green-400">{ item.completion }&nbsp;%</p>
                                                    </div>
                                                    <div className='w-24 h-24 bg-green-400 text-center'>
                                                        <div
                                                        className='font-bold text-lg text-white font-bold'
                                                        style={{ lineHeight: '6rem' }}
                                                        >
                                                          <GiEagleEmblem size="4em" className="inline" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full text-center">
                                                        <label className="text-green-400 font-bold text-sm">{item.name.split(". ")[1]}</label>
                                                    </div>
                                                </div>
                                              ):(
                                                <>
                                                  {
                                                    item.completion >= 75 && item.completion < 100 ? (
                                                      <div className='text-center m-auto hover:shadow p-2'>
                                                          <div className="w-full">
                                                            <p className="font-extrabold text-center text-green-600">{ item.completion }&nbsp;%</p>
                                                          </div>
                                                          <div className='w-24 h-24 bg-green-600 text-center'>
                                                            <div
                                                                className='font-bold text-lg text-white font-bold'
                                                                style={{ lineHeight: '6rem' }}
                                                            >
                                                                <GiJeweledChalice size="4em" className="inline" />
                                                            </div>
                                                          </div>
                                                          <div className="w-full text-center">
                                                            <label className="text-green-600 font-bold text-sm">{item.name.split(". ")[1]}</label>
                                                          </div>
                                                      </div>
                                                    ):(
                                                      <>
                                                        {
                                                          item.completion === 100 ? (
                                                            <div className='text-center m-auto hover:shadow p-2'>
                                                                <div className="w-full">
                                                                    <p className="font-extrabold text-center text-green-800">{ item.completion }&nbsp;%</p>
                                                                </div>
                                                                <div className='w-24 h-24 bg-green-800 text-center'>
                                                                    <div
                                                                    className='font-bold text-lg text-white font-bold'
                                                                    style={{ lineHeight: '6rem' }}
                                                                    >
                                                                    <GiTrophyCup size="4em" className="inline" />
                                                                    </div>
                                                                </div>
                                                                <div className="w-full text-center">
                                                                    <label className="text-green-800 font-bold text-sm">{item.name.split(". ")[1]}</label>
                                                                </div>
                                                            </div>
                                                          ):(
                                                              <>

                                                              </>
                                                          )
                                                        }
                                                      </>
                                                    )
                                                  }
                                                </>
                                              )
                                            }
                                          </>
                                        )
                                      }
                                    </>
                                  )
                                }
                            </div>
                          </div>
                        ))
                      }
                      </>
                  ):(
                      <div className="w-full text-center block   pt-8">
                      <h1 className="mb-4 font-semibold text-center text-gray-500 dark:text-gray-300">
                          Hi &nbsp;
                          <span className="text-red-400">{currentUser.data.data.last_name}</span>
                          , you don't have a badge available yet!
                      </h1>
                      </div>
                      
                  )
                  }                         
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highliht;
