import React from 'react';
import { getShoppingCart } from "../Utilities/Utilities.js";
import { useLoaderData } from 'react-router-dom';
import AppliedJobsCard from './../AppliedJobsCard/AppliedJobsCard';



const AppliedJobs = () => {
const applyJobs = getShoppingCart()
const {featuredJobs} = useLoaderData()

let appliedJobs = [];
for(const applyJobId in applyJobs){
    // console.log(applyJobId)
    featuredJobs.filter(fJob =>{
        // console.log(fJob)
        if(fJob.id == applyJobId){
           appliedJobs.push(fJob) 
        }
    })

}

    
    return (
        <div>
            <div className="flex justify-center items-center w-full bg-[url('https://i.ibb.co/r4ZSBCj/Vector.png')] bg-repeat-space h-[200px]" >
                <h1 className="text-center font-extrabold text-4xl" >Applied Jobs</h1>
            </div>
            {
               appliedJobs.length=== 0 ? 
               <div className="my-40" >
                    <h1 className="text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black" >Nobody applied for any job</h1>
                    <p className="text-right font-semibold" ><small>That means no job add to the local storage.</small></p>
               </div> 
               : <div>
                
                {
                    appliedJobs.map((aJob,idx)=><AppliedJobsCard
                    key={idx}
                    aJob ={aJob}
                    ></AppliedJobsCard>)
                }
                
               </div>
            }
        </div>
    );
};

export default AppliedJobs;