import React from "react";

const Contact = () => {
  return (
    <div className="items-center w-[643px] h-[895px] mx-auto">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="my-[20px]">
        lorem ipsum dolor a,et. consectetur adipiscing. sed do eiusmod tempor
        incididunt labore magne aliqua. ut enimated miniim veniam. lorem ipsum
        dolor sit amet consecutor sdopising elit sed to eisumod tempor
        incididunt ut labore et dolore magna aliqua ut enim ad minm veniam
      </p>
      <div className="flex gap-[50px]">
        <div className="border-2 w-[294px] h-[133px] rounded-xl p-[16px] gap-[10px]">
          <h1 className="text-2xl font-bold">Address</h1>
          <p>1328 Oak Ridge Drive, Saint Loouis, Missouri</p>
        </div>
        <div className="border-2 w-[294px] h-[133px] rounded-xl p-[16px] gap-[10px]">
          <h1 className="text-2xl font-bold">Contact</h1>
          <p>313-332-8662 info@email.com</p>
        </div>
      </div>

      <div className="bg-[#F6F6F7] w-[643px]  rounded-sm my-[20px] p-[40px]">
        <h1 className="text-2xl my-2 font-bold">Leave a Message</h1>
        <div className="">
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                className="w-full p-2"
                placeholder="Your Name"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex-1">
              <input
                className="w-full p-2"
                placeholder="Your Email"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              className="w-full p-2"
              placeholder="Subject"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="mt-4">
            <textarea
              className="w-full p-2"
              placeholder="Write a Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <button className="bg-[#4B6BFB] w-32 h-10 text-white rounded-lg my-2">
          Send Message
        </button>
      </div>
    </div>
  );
};
export default Contact;
