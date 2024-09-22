import React from "react";
import banner  from "../../public/2.png"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-4 flex flex-col md:flex-row">
        <div className="pb-4 w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold ">
              Hello, wellcomes here to learn something{" "} 
              <span className="text-pink-500">new everyday!!!</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              odio cumque laudantium quisquam et sunt culpa minima alias ad
              aspernatur!
            </p>

            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 px-8">
          <img src={banner} alt="BOOKS" />
        </div>
      </div>
    </>
  );
};

export default Banner; 
