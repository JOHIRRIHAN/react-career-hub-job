import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredJobApplication } from "../LocalStorage/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobss, setAppliedJobss] = useState([]);


  useEffect(() =>{
    const storedJobIds = getStoredJobApplication();
    if(jobs.length > 0){ 
      // const jobsApplied = jobs.filter(job =>  storedJobIds.includes(job.id));
      const jobsApplied = [];
      for(const id of storedJobIds){
        const job = jobs.find(job => job.id === id);
        if(job){
          jobsApplied.push(job)
        }
      }
      setAppliedJobss(jobsApplied);
      // console.log(jobs, storedJobId, jobsApplied)
    }
  }, [jobs])
  return (
    <div>
      <h3 className="text-2xl">AppliedJobs: {appliedJobss.length}</h3>
      {
        appliedJobss.map(job => <li key={job.id}><span>{jobs.job_title}</span></li>)

      }
    </div>
  )
}

export default AppliedJobs