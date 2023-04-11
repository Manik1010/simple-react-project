import React from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData, useNavigation } from 'react-router-dom'
import AllApply from './AllApply';


const Applied = () => {
    // const cartData = localStorage.getItem('job-cart');
    let cart = [];

    const savecart = getStoredCart()
    // console.log(savecart);
    const dataSet = useLoaderData()
    // console.log(dataSet);

    for (const id in savecart) {
        const FoundJob = dataSet.find(job => job._id === id);
        // console.log(FoundJob);
        if (FoundJob) {
            cart.push(FoundJob);
        }
    }

    console.log(cart);
    // console.log(cart.name);
    const handleSortCart = (time) => {
        // console.log(time);
        // delete(cart);

        const FoundJobAfterSort = cart.find(job => job.time === time);
        // console.log(FoundJobAfterSort);
        cart = cart.filter(object => {
            return object._id === 0;
        });

        if (FoundJobAfterSort) {
            cart.push(FoundJobAfterSort);
            // console.log(FoundJobAfterSort);
        }
        console.log(cart);

    }
    console.log(cart);
    //   let arr = [{id: 1}, {id: 3}, {id: 5}];

    //   arr = arr.filter(object => {
    //     return object.id === 13;
    //   });

    //   console.log(arr) // 👉️ [{id: 1}, {id: 5}]

    return (
        // <h>Apppp</h>
        <div className='my-container my-4'>
            <h1 className='text-2xl my-8 font-bold text-center'>Applied Jobs</h1>
            <div className='grid grid-cols-1 gap-4 place-items-end h-28'>
                <div className=''>
                    <button onClick={() => handleSortCart('Remote')} type='button' className='btn mx-10'> Remote </button>
                </div>
                <div className=''>
                    <button type='button' className='btn mx-10'> Full Time </button>
                </div>
            </div>
            {
                cart.map(cartInfo => (
                    <AllApply
                        key={cartInfo._id}
                        cartInfo={cartInfo}
                    ></AllApply>
                ))

            }

            {/* <div className='flex justify-between p-16'>
                <div>
                    <img src={cart.picture} alt="" className='w-150 h-150' />
                </div>
                <div>
                    <div>
                        <h1>{cart.name}</h1>
                        <h2>{cart.title}</h2>
                    </div>
                    <div>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-2">
                        {cart.time}
                        </button>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4 my-2">
                        {cart.anotherTime}
                        </button>
                    </div>
                    <div className='flex flex-row my-4 gap-2'>
                        <img src="./../../public/Icons/Location Icon.png" alt="" className='w-8 h-8' />
                        <p>{cart.addrese} </p>
                        <img src="./../../public/Icons/Frame.png" alt="" className='w-6 h-6' />
                        <h5>$ Salary: {cart.price}</h5>
                    </div>

                </div>
                <div>
                    <button
                        // onClick={() => handleAddToCart(FoundData)} 
                        type='button'
                        className='btn w-full mt-8'
                    >
                        View Deatiles
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Applied;