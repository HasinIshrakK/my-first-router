import React, { Suspense, use } from 'react';
import Footer from '../../Components/Footer/Footer';
import Doctor from './Doctor/Doctor';

const fetchDocs = fetch('/my-first-router/doctors.json').then(res => res.json());

const Home = () => {
    const docsData = use(fetchDocs);
    // console.log(docsData)
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
            {/* doctors' section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-12'>
                <Suspense>
                    {
                        docsData.map(
                            doctor => (
                                <Doctor key={doctor.id} doctor={doctor}></Doctor>
                            )
                        )
                    }
                </Suspense>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home; 