import React from 'react';
import { useLoaderData } from 'react-router-dom'
import { useParams } from "react-router-dom";

const JobDetails = () => {
    // console.log(data);
    const data = useLoaderData()
    // console.log(data);

    const routeParams = useParams();

    // ✅ Find the first object that matches a condition
    const found = data.find(obj => {
        return obj._id === routeParams.id;
    });
    //   console.log(found.name);

    return (
        <div className='my-container'>
            {/* Container Box */}
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
                {/* Image Container */}
                <div className=' lg:w-1/2 h-full'>
                    <div className='ml-16 my-4'>
                        <p> <span className='font-bold my-8'> Job Description:</span> {found.Description}</p>
                        <p> <span className='font-bold'> Job Responsibility:</span> {found.Responsibility}</p>
                        <p> <span className='font-bold my-8'> Educational Requarements:</span> {found.Educational}</p>
                    </div>
                    <span className='font-bold'> Experiences:</span>
                    <p className='ml-8 mt-2'>{found.Experiences}</p>
                </div>
                {/* Details Container */}
                <div className='mt-2 p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                    <div>
                        <p className='font-bold'>Job Details</p>
                        <div>
                            <div className='flex gap-2 my-3'>
                                <img src="./../../public/Icons/Frame.png" alt="" className='w-6 h-6' />
                                <h5>$ Salary: {found.price}(per month)</h5>
                            </div>
                            <div className='flex gap-2'>
                                <img src="./../../public/Icons/accounts 1.png" alt="" className='w-6 h-6' />
                                <p>Job Tital: {found.title}</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>Contact Informations</p>
                        <div>
                            <div className='flex gap-2 my-3'>
                                <img src="./../../public/Icons/Frame-2.png" alt="" className='w-6 h-6' />
                                <h5><span className='font-bold'>$Phone:</span> {found.Phone}</h5>
                            </div>
                            <div className='flex gap-2'>
                                <img src="./../../public/Icons/Frame-3.png" alt="" className='w-6 h-6' />
                                <p> <span className='font-bold'>Email:</span> {found.Email}</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="./../../public/Icons/Frame-1.png" alt="" className='w-6 h-6' />
                                <p> <span className='font-bold'>Address:</span> {found.addrese}</p>
                            </div>

                        </div>
                    </div>

                    <div className='mt-8 '>
                        <a href='' className='btn w-full items-center'>
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
// const { picture, title, name, Description, Responsibility, Educational, Experiences, Email, price } = JobskData;

//     console.log(name);
//     console.log(Responsibility);
//     return (
//         <div>
//             Job 
//         </div>
//     );
// };

export default JobDetails;