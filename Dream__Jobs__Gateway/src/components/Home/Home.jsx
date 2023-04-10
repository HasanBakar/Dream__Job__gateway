import React from 'react';
import JobCategoryList from './../JobCategoryList/JobCategoryList';

const Home = () => {
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="w-1/2" >
                    <h1 className="text-5xl font-bold">One Step <br />
                     Closer To Your <br />
                     <span> Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>                                                      
        </div>
        <div className="mt-20 pb-2" >
            <JobCategoryList></JobCategoryList>
        </div>
        
        </>
    );
};

export default Home;