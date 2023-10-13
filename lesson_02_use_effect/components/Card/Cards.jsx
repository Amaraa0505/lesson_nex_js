import React from "react";
import Link from "next/link";

const Cards = ({ bigCard, midCard, smallCards }) => {
  return (
    <div className="mx-auto  md:grid-cols-1  lg:grid-cols-2">
      <div className="flex">
        <Link href={"/detail/" + midCard?.id}>
          <div className="grid-1">
            <div className=" ">
              <img src={midCard?.social_image} className="w-96" />
            </div>
            <div className="p-6">
              <h1 className="text-xl font-bold">Migrating to Linear 101</h1>
              <h1 className="w-96 text-gray-600">{midCard?.title}</h1>
            </div>
          </div>
        </Link>
        <div className=" grid-1">
          <div className="">
            {smallCards.map((smallcard, i) => (
              <Link href={"/detail/" + smallCards?.id}>
                <div>
                  <img src={smallcard?.social_image} className="w-52" />
                  <div className="p-4">
                    <h1 className="text-xl font-bPterold">
                      UX review presentaions
                    </h1>
                    <h1 className="w-52 text-gray-600">{smallcard?.title}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        <Link href={"./detail/" + bigCard?.id}>
          <img src={bigCard?.social_image} className="w-96" />
          <div className="p-14">
            <h1 className="text-xl font-bold">Building your API Stack</h1>
            <h1 className="w-52 text-gray-600">{bigCard?.title}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
