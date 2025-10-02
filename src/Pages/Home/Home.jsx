import React from 'react';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='flex flex-col items-center bg-linear-to-br from-cyan-400 to-blue-700 text-white p-24'>
                <h1>
                    Sweet home dear
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque omnis rem harum consequuntur corporis totam commodi error illum alias expedita?
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home; 