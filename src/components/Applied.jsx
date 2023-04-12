import React, { useState } from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData, useNavigation } from 'react-router-dom'
import AllApply from './AllApply';

// const getStoredAppliedJob = getAppliedJob();
//     const jobs = useContext(JobContext);
//     let storedAppliedJob = [];
//     for (const id of getStoredAppliedJob) {
//         const foundAppliedJob = jobs.find(job => job.id === id);
//         storedAppliedJob.push(foundAppliedJob);
//     }
//     const [appliedJob, setAppliedJob] = useState(storedAppliedJob);

//     const viewOnsiteJobs = () => {
//         const onsiteJobs = storedAppliedJob.filter(job => job.remoteOrOnsite == 'Onsite');
//         setAppliedJob(onsiteJobs);
//     }
//     const viewRemoteJobs = () => {
//         const remoteJobs = storedAppliedJob.filter(job => job.remoteOrOnsite == 'Remote');
//         setAppliedJob(remoteJobs);
//     }

const Applied = () => {
    // const cartData = localStorage.getItem('job-cart');
    let cart = [];
    const savecart = getStoredCart()
    // console.log(savecart);
    const dataSet = useLoaderData()
    for (const id in savecart) {
        const FoundJob = dataSet.find(job => job._id === id);
        // console.log(FoundJob);
        if (FoundJob) {
            cart.push(FoundJob);
        }
    }
    // console.log(cart);
    const [appliedJob, setAppliedJob] = useState(cart);

    const viewOnsiteJobs = () => {
        const onsiteJobs = cart.filter(job => job.time == 'Onsite');
        setAppliedJob(onsiteJobs);
    }
    console.log(appliedJob);
    const viewRemoteJobs = () => {
        const remoteJobs = cart.filter(job => job.time == 'Remote');
        setAppliedJob(remoteJobs);
    }
    console.log(appliedJob);

    return (
        // <h>Apppp</h>
        <div className='my-container my-4'>
            <h1 className='text-2xl my-8 font-bold text-center'>Applied Jobs</h1>
            <div className='grid grid-cols-1 gap-4 place-items-end h-28'>
                <div className=''>
                    <button onClick={() => viewOnsiteJobs()} type='button' className='btn mx-10'> Remote </button>
                </div>
                <div className=''>
                    <button onClick={() => viewRemoteJobs()} type='button' className='btn mx-10'> Full Time </button>
                </div>
            </div>
            {
                appliedJob.map(cartInfo => (
                    <AllApply
                        key={cartInfo._id}
                        cartInfo={cartInfo}
                    ></AllApply>
                ))

            }
        </div>
    );
};

export default Applied;