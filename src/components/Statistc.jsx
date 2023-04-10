import React from 'react';
import { useLoaderData } from 'react-router-dom'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter
} from "recharts";

const Statistc = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div className='ml-96 mt-8'>
            <h1 className='font-bold ml-36 my-10'>Three friends Assigenment Marks</h1>
            <ComposedChart
                width={600}
                height={400}
                data={data}
              
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area fill="#8884d8" stroke="#8884d8" />
                <Bar barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="assignment1" stroke="#ff7300" />
                <Scatter dataKey="assignment2" fill="red" />
                <Scatter dataKey="assignment3" fill="pink" />
                <Scatter dataKey="assignment4" fill="yellow" />
                <Scatter dataKey="assignment5" fill="#8884d8" />
                <Scatter dataKey="assignment6" fill="orange" />
                <Scatter dataKey="assignment7" fill="light" />
                <Scatter dataKey="assignment8" fill="blue" />
            </ComposedChart>
        </div>
    );
};

export default Statistc;