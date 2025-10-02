import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Error = () => {

    useEffect(
        () => {
            toast("You mistyped the location");
        }, []
    )

    return (
        <div className='grid grid-cols-1 items-center'>
            <h1 className='text-center my-12'>
                Oops! This page doesn't exist.
            </h1>
            <Link className='mx-auto' to='/'>
                <button className='btn p-4'>
                    Go back home
                </button>
            </Link>
        </div>
    );
};

export default Error;