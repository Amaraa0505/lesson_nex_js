import React from "react";

const Footer = () => {
  return (
    <div className="h-[400px] bg-slate-400 p-10">
      <div className="flex mx-[80px]">
        <div className="">
          <div className="flex gap-96">
            <div>
              <h1 className="text-3xl">About</h1>
            </div>
            <div className="flex gap-24">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>

          <p className="w-[250px] my-[20px]">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim
            ad minim veniam
          </p>
          <h1>Email: info@jstemplate.net</h1>
          <h1>Phone: 880 123 456 789</h1>
        </div>

        <div>
          <img src="/Scoial wrapper (1).png" />
        </div>
      </div>
      <hr className="w-[70%] mx-20 flex gap-4"></hr>
      <div className="flex p-14 gap-72">
        <a href="/">
          <img src="/Logo.svg" alt="logo" className="my-[20px]" />
        </a>
        <div className="flex gap-5 my-[20px]">
          <div className="font-bold">Terms of Use</div>
          <div className="font-bold">Privacy Policy</div>
          <div className="font-bold">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
