import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const notify = () => toast("Your Application has been Successful Submitted ✅");

  return (
    <div>
      <h2 className="text-center text-5xl font-semibold pt-10">Job Details </h2>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <strong>Job Description:</strong> {job.job_description}
            </p>
            <p className="py-6">
              <strong>Job Responsibility:</strong> {job.job_responsibility}
            </p>
            <p className="py-6">
              <strong>Educational Requirement:</strong> <br />{" "}
              {job.educational_requirements}
            </p>
            <p className="py-6">
              <strong>Experiences:</strong> <br /> {job.experiences}
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm  ">
            <form className="card-body rounded-xl leading-loose border-2 border-sky-400  bg-gradient-to-r from-purple-50 to-purple-100">
              <h2 className="text-center text-xl font-semibold">Job Details</h2>
              <hr />
              <div className="form-control ">
                <h3 className="text-zinc-600 p-2">
                  <b>Salary:</b> {job.salary} [Per Month]
                </h3>
                <h3 className="text-zinc-600 p-2">
                  <b>Job Title:</b> {job.job_title}
                </h3>
                <hr />

                <div>
                  <h2 className="text-xl p-2">Contact Information</h2>
                  <hr />
                  <p className="text-zinc-600 p-2">
                    <b>Phone: </b> {job.contact_information.phone}
                  </p>
                  <p className="text-zinc-600 p-2">
                    <b>Email: </b> {job.contact_information.email}
                  </p>
                  <p className="text-zinc-600 p-2">
                    <b>Address: </b> {job.contact_information.address}
                  </p>
                </div>
              </div>
            </form>
            <div className="form-control mt-6">
              <Link><button onClick={notify} className="btn bg-gradient-to-r from-sky-500 to-indigo-500 w-96 text-white">Apply Now</button></Link>
            </div>
          </div>
        </div>
        <ToastContainer />

      </div>
    </div>
  );
};

export default JobDetails;
