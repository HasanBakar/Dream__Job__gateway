import React from 'react';
import { NavLink } from "react-router-dom";

const AppliedJobsCard = ({aJob}) => {
    const {company_logo,id,location,remote_or_onsite,salary,fulltime_or_parttime,company_name,job_title} = aJob;
    return (
        <div className="grid md:grid-cols-4 gap-3 items-center shadow-xl border my-6" >
            <div className="col-span-3 flex items-center gap-20" >
                <div className="px-8 py-8 my-4 flex justify-center items-center h-[160px] w-[160px]" >
                <img className="w-full" src={company_logo} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-extrabold" >{job_title}</h1>
                    <h2 className="text-xl font-semibold" >{company_name}</h2>
                    <div className="my-4" >
                        <button className="outline outline-offset-2 font-semibold mr-4 px-3 py-1 outline-blue-500" >{remote_or_onsite}</button>
                        <button className="outline outline-offset-2 font-semibold ml-4 px-3 py-1 outline-blue-500">{fulltime_or_parttime}</button>
                    </div>

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
            </div>
            <div className="flex justify-start items-start" >
                <NavLink to = {`/${id}`}><button className ="btn bg-blue-400">View Details</button></NavLink>
            </div>
        </div>
    );
};

export default AppliedJobsCard;