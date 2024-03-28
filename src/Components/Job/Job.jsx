
const Job = ({job}) => {
    const {job_title, logo} = job;
  return (
    <div>
        <h3 className="text-3xl">JobTitle: {job_title}</h3>
        <img src={logo} alt="" />
    </div>
  )
}

export default Job