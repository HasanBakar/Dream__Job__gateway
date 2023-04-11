import React from 'react';
import { NavLink } from 'react-router-dom';


const FeatureJobsCart = ({feajob}) => {
    // console.log(feajob)
    const {company_logo,id,location,remote_or_onsite,salary,fulltime_or_parttime,company_name,job_title} = feajob;
    return (
        <div className="border shadow-xl p-8" >
            <img className="w-[400px] h-[150px] mb-10" src={company_logo} alt="" />
            <h1 className="text-2xl font-extrabold" >{job_title}</h1>
            <h2 className="text-xl font-semibold" >{company_name}</h2>
            <div className="my-4" >
                <button className="outline outline-offset-2 font-semibold mr-4 px-3 py-1 outline-blue-500" >{remote_or_onsite}</button>
                <button className="outline outline-offset-2 font-semibold ml-4 px-3 py-1 outline-blue-500">{fulltime_or_parttime}</button>
            </div>
            <div className="font-extrabold" >
                <div className="flex gap-4 my-2">
                    <div className="flex gap-1" >
                        <img src="https://i.ibb.co/8KG40Qy/Location-Icon.png" alt="" />
                         <span> {location}</span>
                    </div>
                     <div className="flex gap-1">
                        <img src="https://i.ibb.co/DWqpNg7/Frame.png" alt="" />
                        <span> Salary: {salary}</span>
                     </div>
                </div>
            </div>
            <div className="flex justify-start items-start" >
                <NavLink to = {`/${id}`}><button className ="btn bg-blue-400">View Details</button></NavLink>
            </div>
        </div>
    );
};

export default FeatureJobsCart;