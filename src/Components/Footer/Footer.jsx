import React from 'react';
import logo from '../../assets/logo.png';
import '../../App.css'

const Footer = () => {
    return (
        <div className='flex flex-col gap-10 py-12 bg-blue-950 foot'>
            <div className='mx-auto'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='mx-auto'>
                <ul className='flex gap-6 mn'>
                    <li><a href="">
                        Menu 1
                    </a></li>
                    <li><a href="">
                        Menu 2
                    </a></li>
                    <li><a href="">
                        Menu 3
                    </a></li>
                </ul>
            </div>
            <div className='mx-auto'>
                <ul className='flex gap-6'>
                    <li><a href="">
                        Social Menu 1
                    </a></li>
                    <li><a href="">
                        Social Menu 2
                    </a></li>
                    <li><a href="">
                        Social Menu 3
                    </a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;