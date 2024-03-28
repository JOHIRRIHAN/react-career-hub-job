const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-sky-50 to-indigo-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-x-72">
          <img
            src="/src/assets/images/user.png"
            className="max-w-sm lg:max-w-lg  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">One Steps <br/> To Your <br/><span className="text-purple-500">Dream Job</span></h1>
            <p className="py-6 tracking-normal">
              Provident cupiditate voluptatem et <br /> in. Quaerat fugiat ut assumenda
              excepturi <br /> exercitationem quasi. In deleniti <br /> eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;