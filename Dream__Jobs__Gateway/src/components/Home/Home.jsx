import React from 'react';
import { useContext,createContext } from 'react';
import { CATEGORY } from '../../App';
import JobCategoryList from './../JobCategoryList/JobCategoryList';
import { useLoaderData } from 'react-router-dom';
import FeatureJobsCart from './../FeatureJobsCart/FeatureJobsCart';



const Home = () => {    
    /**
     featured job data start loading
     */
    const data = useLoaderData()
    const feaJobs = data.featuredJobs
    // console.log(feaJobs)

    /**
     featured job data End loading
     */
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
        {/* Featured jobs section started */}
        <div className="my-7" >
            <h1 className="text-center text-5xl font-extrabold" >Featured Jobs</h1>
            <p className="text-center py-1" >Explore thousands of job opportunities with all the information you need. Its your future.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 my-8" >
            {
             feaJobs.map(feajob =><FeatureJobsCart
             key={feajob.id}
             feajob = {feajob}
             ></FeatureJobsCart> )   
            }
        </div>
        {/* Featured jobs section ended */}
        </>
    );
};

export default Home;