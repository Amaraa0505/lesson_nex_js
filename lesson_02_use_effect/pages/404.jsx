import React from "react";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="mx-auto h-[438px] flex justify-center">
      <div className="w-[600px] h-36 flex">
        <div className="text-6xl my-auto">404</div>
        <div className="w-[2px] h-40 bg-slate-400 mx-10"></div>
        <div className="">
          <h1 className="text-2xl my-4">Page Not Found</h1>
          <p className="my-4">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className="bg-[#4B6BFB]  rounded-lg w-28 h-10 text-white">
            Back To Home
          </button>
        </div>
      </div>
      <Link href="/" className=""></Link>
    </div>
  );
};
export default ErrorPage;
