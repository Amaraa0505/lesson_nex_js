import React from "react";

const Footer = () => {
  return (
    <div className="h-[400px] bg-slate-400 p-10">
      <div className="flex mx-[80px]">
        <div className="">
          <h1 className="text-3xl">About</h1>
          <p className="w-[250px] my-[20px]">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim
            ad minim veniam
          </p>
          <h1>Email: info@jstemplate.net</h1>
          <h1>Phone: 880 123 456 789</h1>
        </div>
        <div className="my-[5px] mx-[220px] gap-5 flex">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <img src="/Scoial wrapper (1).png" />
        </div>
      </div>
      <hr className="w-[700px] mx-[80px]"></hr>
      <div className="flex justify-around">
        <a href="/">
          <img src="/Logo.svg" alt="logo" className="my-[20px]" />
        </a>
        <div className="flex gap-5 my-[20px]">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
