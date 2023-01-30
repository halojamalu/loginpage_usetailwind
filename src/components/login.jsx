import React from 'react';

const Login = () => {
  return (
    <div className=" z-10">
      <div className="  bg-slate-100 rounded-lg shadow-lg py-8 px-3 text-slate-900 md:w-80">
        <div className=" mb-4">
          <h3 className=" font-bold text-2xl tracking-wide">Welcome back!</h3>
          <p className=" pt-2 text-slate-400 text-sm ">
            Start managing your college payments
          </p>
        </div>
        <form action="" className="flex flex-col space-y-4">
          <div>
            <label htmlFor="" className=" text-sm">
              Email
            </label>
            <input
              type="text"
              placeholder="you@example.com"
              className="  bg-slate-100 ring-1 ring-slate-300 w-full rounded-md px-2 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm placeholder:px-1 placeholder:text-slate-300"
            />
          </div>
          <div>
            <label htmlFor="" className=" text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="At least 8 characters"
              className="  bg-slate-100 ring-1 ring-slate-300 w-full rounded-md px-2 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm placeholder:px-1 placeholder:text-slate-300"
            />
          </div>
          <a href="#/" className=" self-end text-xs  text-slate-500 ">
            Forgot password?
          </a>
          <button className=" inline-block bg-blue-900 text-blue-50 font-semibold py-2 px-4 rounded-md">
            Login
          </button>
        </form>
        <div className=" relative inline-flex items-center justify-center w-full py-4">
          <hr className="w-64 h-px my-4 bg-gray-300 border-0 " />
          <span className=" absolute px-3 text-sm text-slate-600 -translate-x-1/2 bg-slate-100 left-1/2 ">
            or
          </span>
        </div>
        <div className="flex flex-row justify-center text-sm text-slate-800 gap-2">
          <h1>Don't you have an account?</h1>
          <a href="#/" className=" font-medium text-blue-900">
            Sing Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
