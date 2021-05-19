import React from 'react';
import { Link } from 'react-router-dom';

export default class Navsticky extends React.Component{
    render(){
        return(
            <>
                <div className="top-0 p-5">
                    <h4 className="uppercase font-black text-green-500">Liste des parcours</h4>
                    <ul className="text-blue-500 mt-10 space-y-6">
                        {
                            this.props.paths.map( p => (
                                <li className="font-bold text-blue-400">
                                    <Link className="hover:text-blue-500" to={ "/path/" + p.id } onClick={ e => this.props.closeDropdownMenu() } >{ p.title.toUpperCase() }</Link>
                                </li>
                            ) )
                        }
                    </ul>
                </div>
            </>
        )
    }
}