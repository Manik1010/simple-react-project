import React from 'react';
import { Link } from 'react-router-dom';

const AllApply = ({ cartInfo }) => {
    // console.log(cartInfo.name)
    return (
        <div className='flex justify-between p-16 border my-2'>
            <div className='border w-48 h-48 object-cover'>
                <img src={cartInfo.picture} alt="" className='' />
            </div>
            <div>
                <div>
                    <h1>{cartInfo.name}</h1>
                    <h2>{cartInfo.title}</h2>
                </div>
                <div>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-2">
                        {cartInfo.time}
                    </button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4 my-2">
                        {cartInfo.anotherTime}
                    </button>
                </div>
                <div className='flex flex-row my-4 gap-2'>
                    <img src="./../../public/Icons/Location Icon.png" alt="" className='w-8 h-8' />
                    <p>{cartInfo.addrese} </p>
                    <img src="./../../public/Icons/Frame.png" alt="" className='w-6 h-6' />
                    <h5>$ Salary: {cartInfo.price}K</h5>
                </div>

            </div>
            <div>
                <Link to={`../job/${cartInfo._id}`}>
                    <button
                        type='button'
                        className='btn w-full mt-8'
                    >
                        View Deatiles
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllApply;