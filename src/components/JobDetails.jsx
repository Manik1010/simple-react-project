import React from 'react';
import { useLoaderData } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { addToDb } from '../utils/fakeDB';

const JobDetails = () => {
    // console.log(data);
    const data = useLoaderData()
    // console.log(data);

    const routeParams = useParams(); 

    // ✅ Find the first object that matches a condition
    const FoundData = data.find(obj => {
        return obj._id === routeParams.id;
    });
    //   console.log(FoundData._id);
    const handleAddToCart = (id) => {
        // console.log(id);
        addToDb(id);
        // console.log("allha.");

      }

    return (
        <div className='my-container'>
            {/* Container Box */}
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
                {/* Image Container */}
                <div className=' lg:w-1/2 h-full'>
                    <div className='ml-16 my-4'>
                        <p> <span className='font-semibold my-8'> Job Description:</span> {FoundData.Description}</p>
                        <p> <span className='font-semibold'> Job Responsibility:</span> {FoundData.Responsibility}</p>
                        <p> <span className='font-semibold my-8'> Educational Requarements:</span> {FoundData.Educational}</p>
                    </div>
                    <span className='font-bold'> Experiences:</span>
                    <p className='ml-8 mt-2'>{FoundData.Experiences}</p>
                </div>
                {/* Details Container */}
                <div className='mt-2 p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                    <div>
                        <p className='font-bold'>Job Details</p>
                        <div>
                            <div className='flex gap-2 my-3'>
                                <img src="./../../public/Icons/Frame.png" alt="" className='w-6 h-6' />
                                <h5>$ Salary: {FoundData.price}(per month)</h5>
                            </div>
                            <div className='flex gap-2'>
                                <img src="./../../public/Icons/accounts 1.png" alt="" className='w-6 h-6' />
                                <p>Job Tital: {FoundData.title}</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>Contact Informations</p>
                        <div>
                            <div className='flex gap-2 my-3'>
                                <img src="./../../public/Icons/Frame-2.png" alt="" className='w-6 h-6' />
                                <h5><span className='font-semibold'>$Phone:</span> {FoundData.Phone}</h5>
                            </div>
                            <div className='flex gap-2'>
                                <img src="./../../public/Icons/Frame-3.png" alt="" className='w-6 h-6' />
                                <p> <span className='font-semibold'>Email:</span> {FoundData.Email}</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="./../../public/Icons/Frame-1.png" alt="" className='w-6 h-6' />
                                <p> <span className='font-semibold'>Address:</span> {FoundData.addrese}</p>
                            </div>

                        </div>

                        <button
                            onClick={() => handleAddToCart(FoundData._id)} 
                            // onClick={() => alert('Item added!!!')} 
                            type='button'
                            className='btn w-full mt-8'
                        >
                            Apply Now
                        </button>
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