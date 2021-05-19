import React from 'react';
import ContentList from '../ContentList/ContentList';
import HomeFooter from '../HomeFooter/HomeFooter';
import HomeHeader from '../HomeHeader/HomeHeader';
import SignUp from '../Signup/SignUp';
import './Styles/Homepage.css'

export default function HomeComponent(){
    return(
        <div className="homepage absolute h-full w-full py-6 z-40 h-screen md:h-full overflow-y-auto md:overflow-hidden">
            <div className="w-full md:mb-16">
                <HomeHeader/>
            </div>
            <div className="relative h-full md:mt-0 md:flex">
                <div className="w-full lg:mr-8 md:w-3/5 lg:w-2/3">
                    <ContentList/>
                </div>
                <div className="w-full px-6 md:pr-6  md:float-right right-12 md:w-2/5 lg:w-1/3">
                    <SignUp/>
                </div>
            </div>
            <div className="mt-16 md:mt-0 py-6">
                <HomeFooter/>
            </div>
            
        </div>
    )
}