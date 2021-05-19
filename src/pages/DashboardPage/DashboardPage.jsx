import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu';

class DashboardPage extends React.Component{
    componentDidMount() {
        // window.location.href = window.location.href
    }
    render(){
        return(
            <>
                <section className="w-full h-screen pb-64 overflow-auto">
                    <Header />
                    <Menu />
                </section>
            </>
        )
    }
}
export default DashboardPage;