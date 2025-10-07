import React, { Suspense, use, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Doctor1 from './Doctor/Doctor1';
import Doctor2 from './Doctor/Doctor2';

const fetchDocs1 = fetch('/my-first-router/doctors1.json').then(res => res.json());
const fetchDocs2 = fetch('/my-first-router/doctors2.json').then(res => res.json());

const Home = () => {
    const docsData1 = use(fetchDocs1);
    const docsData2 = use(fetchDocs2);

    const [showAll, setShowAll] = useState(false);

    const toggle = () => { setShowAll(!showAll) };

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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-12 mb-4'>
                <Suspense>
                    {
                        docsData1.map(
                            doctor => (
                                <Doctor1 key={doctor.id} doctor={doctor} docsData2={docsData2}></Doctor1>
                            )
                        )
                    }
                </Suspense>
            </div>
            <div className={`
                grid grid-cols-1 lg:grid-cols-3 gap-4 m-12 mt-0 mb-4
                ${showAll || "hidden"
                }
                `}>
                <Suspense>
                    {
                        docsData2.map(
                            doctor => <Doctor2 key={doctor.id} doctor={doctor}></Doctor2>
                        )
                    }
                </Suspense>
            </div>
            <div className='flex justify-center mb-12'>
                <button onClick={toggle} className='btn'>
                    {
                        showAll? 'Show Less':'Show All'
                    }
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home; 