import React from 'react';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io5';
import { Illust } from '../assets';
import Login from '../components/login';

const Register = () => {
  return (
    <div className="antialiased flex w-full min-h-screen justify-center items-center bg-gray-300">
      <div className=" relative flex flex-col md:flex-row  md:space-y-0 bg-blue-50 w-full max-w-3xl p-5 md:p-8 rounded-xl shadow-lg text-slate-50 overflow-hidden ">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full -bottom-32 -left-32 blur-3xl"></div>
        <div className="absolute w-[28rem] h-[28rem] bg-yellow-500 rounded-full -right-20 -top-20 blur-3xl"></div>
        <div className="flex flex-col space-y-8 justify-between z-10 ">
          <div>
            <h1 className=" bg-blue-900 py-2 px-4 rounded-md w-fit font-bold">
              J
            </h1>
            <p className=" pt-2 text-slate-700 md:text-slate-500 text-sm ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
              impedit!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={Illust} alt="" className="h-48 md:h-60 " />
          </div>
          <div className=" flex flex-row gap-6">
            <div>
              <IoLogoLinkedin className=" text-xl" />
            </div>
            <div>
              <IoLogoTwitter className=" text-xl" />
            </div>
            <div>
              <IoLogoWhatsapp className=" text-xl" />
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Register;

// IoLogoFacebook;
// IoLogoDribbble;
// IoLogoInstagram;
