import React from 'react';
import ContentList from '../ContentList/ContentList';
import LoginHeader from '../LoginHeader/LoginHeader';
import LoginFooter from '../LoginFooter/LoginFooter';
import Login from '../SignIn/Login';
import './Styles/Loginpage.css'

export default function LoginPageComponent(){
    return(
        <div className="homepage w-full py-6 z-50 h-screen overflow-y-auto">
            <div className="w-full md:mb-16">
                <LoginHeader/>
            </div>
            <div className="-mt-16 md:mt-0 md:flex">
                <div className="w-full lg:mr-8 md:w-3/5 lg:w-2/3">
                    <ContentList/>
                </div>
                <div className="w-full px-6 md:pr-6  md:float-right right-12 md:w-2/5 lg:w-1/3">
                    <Login/>
                </div>
            </div>
            <div className="py-0">
                <LoginFooter/>
            </div>
            
        </div>
            
    )
}