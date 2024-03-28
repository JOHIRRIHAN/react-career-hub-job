import { FaLocationDot } from "react-icons/fa6";

const Job = ({ job }) => {
  const {
    job_title,
    logo,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div className="card card-compact p-5  bg-base-100 shadow-xl">
      <figure>
        <img className="w-28 rounded-2xl" src={logo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-x-5">
          <button className="border border-purple-600 text-purple-600 px-4 py-2">
            {remote_or_onsite}
          </button>
          <button className="border border-purple-600 text-purple-600 px-4 py-2">
            {job_type}
          </button>
        </div>
        <div className="flex py-2">
          <p className="flex">
            <FaLocationDot />
            {location}
          </p>
          <p>$ Salary: {salary}</p>
        </div>
        <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-28">View Details</button>
      </div>
      
    </div>
  );
};

export default Job;
