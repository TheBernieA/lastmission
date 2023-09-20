import { vision } from "@public/assets/images";
import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <section className="">
          {/* <div className="bg-white h-[150px] w-full transform -skew-y-2 absolute left-0 -top-10 origin-left"></div> */}
      <h1 className="uppercase font-bold text-[40px] max-sm:text-[35px]">
        our{" "}
        <span className="border-black-100 text-white  font-extrabold drop-shadow-lg">
          vision
        </span>
      </h1>
      <div className="flex items-center gap-4 max-sm:flex-col">
        <p className="mt-10 info-text w-1/2 text-black-100 max-sm:text-base max-sm:w-full max-sm:mt-5">
          Bridging the gap between healthcare and faith, providing much-needed
          care to those who are often overlooked while sharing the love of
          Christ with those in need.
        </p>
        <Image
          src={vision}
          width={380}
          height={100}
          alt=""
          className="object-contain ml-20 max-sm:ml-0"
        />
      </div>
    </section>
  );
};

export default Vision;
