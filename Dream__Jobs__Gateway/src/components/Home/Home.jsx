import React from 'react';
import { useContext } from 'react';
import { CATEGORY } from '../../App';

import JobCategoryList from './../JobCategoryList/JobCategoryList';


const Home = () => {    

    const jobs = useContext(CATEGORY)
    

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
             <h1 className="text-center font-extrabold text-4xl" >Job Category List</h1> 
           <p className="text-center py-3" >Explore thousands of job opportunities with all the information you need. Its your future.</p>
            
        </div>
        <div className="grid md:grid-cols-4 gap-20 mb-10" >
            {
                jobs.map(job =><JobCategoryList
                key={job.id}
                job = {job}
                ></JobCategoryList> )
            }
        </div>
        
        </>
    );
};

export default Home;