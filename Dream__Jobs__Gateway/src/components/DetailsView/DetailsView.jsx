import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsDescription from './../DetailsDescription/DetailsDescription';
import DetailsSideCard from './../DetailsSideCard/DetailsSideCard';

let singleJob;
const DetailsView = () => {

  const {data, selectedId} = useLoaderData();
  
  {
    data.find(d =>{
        if(d.id == selectedId){
          singleJob = d;  
        }
    })
  }
  
    return (
        <>
        <div className="flex justify-center items-center w-full bg-[url('https://i.ibb.co/r4ZSBCj/Vector.png')] bg-repeat-space h-[200px]" >
            <h1 className="text-center font-extrabold text-4xl" >Job Details</h1>
        </div>
        <div className="w-full h-[650px] grid md:grid-cols-3 gap-3 justify-center pt-6 p-5" >
            <div className="w-ful col-span-2" >
            <DetailsDescription singleJob={singleJob} ></DetailsDescription>
            </div>
            <div className="w-full"> 
                <DetailsSideCard singleJob={singleJob}></DetailsSideCard>
            </div>
        </div>
            
        </>
    );
};

export default DetailsView;