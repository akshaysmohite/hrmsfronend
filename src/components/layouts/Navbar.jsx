import React, { Component } from 'react'
import Logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const user = this.props.user; console.log(user);
        return (
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">HRMS</span>
                    </a>
                    {
                        user && <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900">Notices</a>
                            <p className="justify-end"> Welcome {user.name}</p>
                        </nav>
                    }
                    {
                        !user && <React.Fragment><NavLink to="/login">
                            <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Login</button>
                        </NavLink></React.Fragment>
                    }

                </div>
            </header>
        )
    }
}

export default Navbar
