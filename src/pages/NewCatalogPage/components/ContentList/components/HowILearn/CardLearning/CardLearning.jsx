import React from 'react';
import { FaGit, FaLinux, FaHtml5, FaServer, FaNodeJs, FaDatabase, FaReact, FaUserAlt } from 'react-icons/fa';
import { DiCss3, DiSass, DiPython, DiJavascript1 } from 'react-icons/di';
import { CgPassword, CgWebsite } from 'react-icons/cg';
import { AiTwotoneLock, AiFillDatabase } from 'react-icons/ai';
import { BiCodeAlt, BiLogIn, BiLastPage } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { GoDatabase } from 'react-icons/go';

export const CardLearning = () => {
    return(
        <>
            <div className="w-full py-6 grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaGit className="text-white" size="2rem"/>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Git
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaLinux className="text-white" size="2rem"/>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Unix system - navigation and file management
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaLinux className="text-white" size="2rem"/>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Unix system - I/O and redirections
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <h1 className="text-white font-extrabold text-4xl">C</h1>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Foundations of programming - variables and conditional statements in C
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <h1 className="text-white font-extrabold text-4xl">C</h1>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Foundations of programming - functions and loops statements in C
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <h1 className="text-white font-extrabold text-4xl">C</h1>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Memory access - pointers in C
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <h1 className="text-white font-extrabold text-4xl">C</h1>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Memory management - memory allocation in C
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <h1 className="text-white font-extrabold text-4xl">C</h1>
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Data structures in C, including linked lists
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaHtml5 className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            HTML
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiCss3 className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            CSS
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiSass className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Sass
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiCss3 className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Flexbox
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiCss3 className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Responsive design
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <CgPassword className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Forms
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <CgWebsite className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Webpage integration
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiPython className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Foundations of programming in Python
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiPython className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Data Structures in Python
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiPython className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Foundations of OOP in Python
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiPython className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            OOP Inheritance in Python
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaServer className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Web Server in Python
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiPython className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Web Scraping in Python
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiJavascript1 className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Foundations of programming in Javascript
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiJavascript1 className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            DOM and in browser Javascript
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaNodeJs className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Web Server in Javascript
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <DiJavascript1 className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Web Scraping in Javascript 
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <GoDatabase className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Personal data 
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <BiLogIn className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            User basic authentication 
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <AiTwotoneLock className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            User session authentication
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaUserAlt className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            User management API
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <BiCodeAlt className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Caching algorithm
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <BiLastPage className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Pagination concept
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <SiMysql className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Database - MySQL
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <AiFillDatabase className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Database - NoSQL
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaDatabase className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Database - Key storage in Redis
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <IoLogoJavascript className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Modern Javascript ES6
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <IoLogoJavascript className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Typescript
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            Foundations of front-end framework with React
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            React props
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            React component
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            React inline styling
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            React state
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            React Redux action creator and normalizr
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            React Redux reducer and selector
                        </label>
                    </div>
                </div>
                <div className='relative h-20 w-full flex flex-row   shadow-md rounded-sm'>
                    <div className="flex items-center bg-green-700 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 text-red-500">
                        <FaReact className="text-white" size="2rem" />
                    </div>
                    <div className="flex text-left flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow px-2">
                        <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                            React Redux Connectors and Providers
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}