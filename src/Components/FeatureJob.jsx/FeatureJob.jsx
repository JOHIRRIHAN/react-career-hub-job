import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {

    const [dataLength, setDataLength] = useState(4)

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(ref => ref.json())
        .then(data => setJobs(data))
    },[])

  return (
    <div>
      <div>
        <h2 className="text-4xl font-semibold text-center">Feature Job</h2>
        <p className="text-center py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aperiam!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0,dataLength).map(job=> <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
      <button onClick={()=> setDataLength(jobs.length)}
       className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-28 text-center my-20 ">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeatureJob;
