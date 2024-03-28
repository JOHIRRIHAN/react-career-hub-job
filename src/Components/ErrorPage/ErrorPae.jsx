import { Link } from "react-router-dom"

const ErrorPae = () => {
  return (
    <div className=" text-center p-[10rem]">
        <h2 className="text-5xl font-bold p-5">Opps!!!</h2>
        <h5 className="text-xl">Sorry Unexpected page</h5>
        <Link to={'./'}><button className="bg-green-700 px-6 py-3 rounded-xl text-white text-lg">Go to Home</button></Link>
    </div>
  )
}

export default ErrorPae