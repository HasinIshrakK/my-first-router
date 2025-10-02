import React from 'react';
import logo from '../../assets/logo.png'
import { Moon, Sun } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router';

const Navbar = () => {

    const themeToggle = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to='/'>Home</Link></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl flex items-center">
                        <img className='h-6 w-6' src={logo} alt="Logo" />
                        MedAppoint</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button onClick={themeToggle} className='flex'>
                        <Sun className='themeLight' data-tooltip-delay-show={500}></Sun>
                        <Moon className='themeDark' data-tooltip-delay-show={500}></Moon>
                    </button>
                    <Tooltip content='Switch to Day Mode' anchorSelect='.themeLight'>
                    </Tooltip>
                    <Tooltip content='Switch to Night Mode' anchorSelect='.themeDark'></Tooltip>
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;