import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
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

              <h3 className="font-bold text-lg">Login</h3>
              <div className="m-3 space-y-3">
                <div>Email</div>
                <input
                  type="email"
                  placeholder="enter you email"
                  className="bg-white text-black w-full px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                <div>Password</div>
                <input
                  type="password"
                  placeholder="password"
                  className="bg-white text-black w-full px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                <div className="flex justify-between">
                  <button className="btn btn-secondary">Login</button>
                  <p>
                    Not registered?{" "}
                    <a
                      href="/signup"
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Signup
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
