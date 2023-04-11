import React from 'react';

const DetailsDescription = ({singleJob}) => {
    
    const {experiences,educational_requirements,job_responsibility,job_description} = singleJob;
    return (
        <div>
            <p className="mb-2" ><span className="font-extrabold text-lg" >Job Description: </span>{job_description} </p>
            <p className="mb-2"><span className="font-extrabold text-lg">Job Responsibility: </span>{job_responsibility} </p>
            <p className="font-extrabold text-lg">Educational Requirements:</p>
            <p className="mb-2">{educational_requirements}. </p>
            <p className="font-extrabold text-lg">Experiences:</p>
            <p className="mb-2">{experiences}. </p>
        </div>
    );
};

export default DetailsDescription;