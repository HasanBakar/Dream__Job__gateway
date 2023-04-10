import React from 'react';


const JobCategoryList = ({job}) => {
    const {jobs_available,category_name,category_logo} = job;
    return (
        <div className="bg-gray-100 p-7 shadow-lg border" >
          <img src={ category_logo } alt="" />
          <h1 className="text-xl font-bold" >{category_name}</h1>
          <h3>{jobs_available} Jobs Available</h3>
        </div>
    );
};

export default JobCategoryList;