import React from 'react';

const FeatureJobsCart = ({feajob}) => {
    console.log(feajob)
    const {company_logo,location,remote_or_onsite,salary,fulltime_or_parttime,company_name,job_title} = feajob;
    return (
        <div className="border shadow-xl p-8" >
            <img className="w-[500px] h-[180px] mb-10" src={company_logo} alt="" />
            <h1 className="text-2xl font-extrabold" >{job_title}</h1>
            <h2 className="text-xl font-semibold" >{company_name}</h2>
            <div className="my-4" >
                <button className="outline outline-offset-2 font-semibold mr-4 px-3 py-1 outline-blue-500" >{remote_or_onsite}</button>
                <button className="outline outline-offset-2 font-semibold ml-4 px-3 py-1 outline-blue-500">{fulltime_or_parttime}</button>
            </div>
            <div className="font-extrabold" >
                <p><span>{location}</span> <span>{salary}</span></p>
            </div>
            <div className="flex justify-end items-end" >
                <button className ="btn bg-blue-400">View Details</button>
            </div>
        </div>
    );
};

export default FeatureJobsCart;