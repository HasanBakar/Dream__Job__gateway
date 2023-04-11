import React from 'react';

const DetailsSideCard = ({singleJob}) => {
    const {contact_information,location,job_title,salary} = singleJob;
    return (
        <div>
            <div className="bg-gray-50 pl-3 py-5 shadow-md border" >
                <h1 className="font-extrabold text-2xl my-3">Job Details</h1>
                <hr />
                <div className="py-1 mb-4" >
                    <div className="flex pt-2" > 
                    <img src="https://i.ibb.co/DWqpNg7/Frame.png" alt="" /> 
                    <span className="text-lg font-semibold px-2" >Salary: </span> {salary} </div>
                    <div className="flex pb-2" > 
                    <img src="https://i.ibb.co/cQgMNrX/Frame-1.png" alt="" /> 
                    <span className="text-lg font-semibold px-2" >Job title: </span> {job_title} </div>
                </div>
                <h1 className="font-extrabold text-2xl my-3">Contact Information</h1>
                <hr />
                <div className="py-1 mb-4" >
                    <div className="flex pt-2" > 
                    <img src="https://i.ibb.co/hVHNQPp/Frame-2.png" alt="" /> 
                    <span className="text-lg font-semibold px-2" >Phone: </span> {contact_information.phone} </div>
                    <div className="flex pb-2" > 
                    <img src="https://i.ibb.co/jRJWWF2/Frame-3.png" alt="" /> 
                    <span className="text-lg font-semibold px-2" >Email: </span> {contact_information.email} </div>
                    <div className="flex pb-2" > 
                    <img src="https://i.ibb.co/4f5fzXw/Frame-4.png" alt="" /> 
                    <span className="text-lg font-semibold px-2" >Address: </span> {location} </div>
                </div>
            </div>
            <div className="mt-8" >
                <button className="btn w-full Now_aplly_btn" >Apply Now</button>
            </div>
        </div>
    );
};

export default DetailsSideCard;