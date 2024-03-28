import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(ref => ref.json())
        .then(data => setJobs(data))
    },[])

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center">Feature Job: {jobs.length}</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aperiam!
        </p>
      </div>
      <div className="grid grid-cols-2">
        {
            jobs.map(job=> <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default FeatureJob;
