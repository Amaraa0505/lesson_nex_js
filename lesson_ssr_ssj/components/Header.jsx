import React from "react";

const Header = ({ setSearchTitle }) => {
  const isActive = usePathname();
  return (
    <div className="m-20 mx-auto w-[800px] ">
      <div className="flex justify-between ">
        <a href="/">
          <img src="/Logo.svg" alt="logo" />
        </a>
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-4"
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        />
      </div>
      <hr className="my-4 "></hr>
    </div>
  );
};

export default Header;
