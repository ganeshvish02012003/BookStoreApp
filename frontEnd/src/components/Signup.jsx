import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen">
      <div className="flex justify-center pt-32">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="m-3 space-y-3">
              <div>Username</div>
              <input
                type="text"
                placeholder="Enter you Username"
                className="bg-white text-black w-full px-3 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <div>Email</div>
              <input
                type="email"
                placeholder="Enter you email"
                className="bg-white text-black w-full px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <div>Password</div>
              <input
                type="password"
                placeholder="Password"
                className="bg-white text-black w-full px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <div className=" flex justify-between">
                <button className="btn btn-secondary">SignUp</button>
                <p>
                  {" "}
                  Have Account?
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    {" "}
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
