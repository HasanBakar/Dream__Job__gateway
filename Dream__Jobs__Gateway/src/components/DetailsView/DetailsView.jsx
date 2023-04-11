import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsView = () => {
    
  const temp = useLoaderData();
  const details = temp.featuredJobs;
  console.log(details)  

    return (
        <div>
            <h1>I am from details view</h1>
        </div>
    );
};

export default DetailsView;