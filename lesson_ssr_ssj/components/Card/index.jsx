import Link from "next/link";
import React from "react";

const Card = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id}>
      <div className="border flex-col">
        <img
          src={
            blog.cover_image
              ? blog.cover_image
              : "https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
          }
          className="rounded-[6px]  "
        />
        <div className="p-[8px]">
          <span className="text-blue-600 bg-gray-200 rounded-xl ">
            {blog?.type_of}
          </span>
          <h1 className="truncate">{blog.title}</h1>
          <div className="flex gap-[20px] items-center ">
            <img
              src={blog.user.profile_image}
              className="w-[40px] h-[40px] rounded-full "
            />
            <p className="text-gray-600">{blog.user.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
