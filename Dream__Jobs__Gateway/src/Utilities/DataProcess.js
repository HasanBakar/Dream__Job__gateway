const jobCategoryCartData = async() =>{

    const response = await fetch("available__jobs.json");
    const jobs = await response.json();
    const JobCartData = Promise.resolve(jobs)
    return JobCartData;
}


export {
    jobCategoryCartData
}