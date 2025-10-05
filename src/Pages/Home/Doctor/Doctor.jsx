import React from 'react';

const Doctor = ({ doctor }) => {
    // console.log(doctor)
    return (
        <div className='border-2 p-4 rounded-2xl pb-2'>
            <h1>
                {
                    doctor.name
                }
            </h1>
            <p>
                {
                    doctor.education
                }
            </p>
            <h3 className='py-1'>
                {
                    doctor.speciality
                } with experience of {
                    doctor.experience
                }
            </h3>
            <div className='flex justify-between items-center'>
                <p>
                    Registration Number: {
                        doctor.registration_number
                    }
                </p>
                <button className='btn'>
                    View details
                </button>
            </div>
        </div>
    );
};

export default Doctor;