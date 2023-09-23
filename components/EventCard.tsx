"use client";

import { pusiga } from "@public/assets/events";
import Image from "next/image";
import Button from "./Button";
import { formatDate, hasDatePassed, splitDate } from "@utils";
import { useEffect } from "react";
import { IEvent } from "@types";

const EventCard = ({ image, startDate, endDate, text, subText }: IEvent) => {
  const splitStartDate = splitDate(startDate);
  const splitEndDate = splitDate(endDate);
  //Convert date string to a Date object
  const convertDate = new Date(endDate);
  const formattedDate: string = formatDate(convertDate);
  // const formattedDate =

  const dateNotPassed = hasDatePassed(formattedDate);
  return (
    <>
      {dateNotPassed && (
        <div className="flex padding lg:flex-row cursor-pointer max-sm:flex-col max-sm:items-center md:items-center md:flex-col">
          <div className="flex">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[30px] max-sm:text-[27px]">
                {splitStartDate?.day}
              </h1>
              <h3 className="font-semibold uppercase text-[17px] max-sm:text-[14px]">
                {splitStartDate?.month}
              </h3>
              <h3 className="font-semibold text-[17px] max-sm:text-[14px]">
                {splitStartDate?.year}
              </h3>
            </div>
            <span className="self-center mx-5">{splitEndDate ? "to" : ""}</span>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[30px] max-sm:text-[27px]">
                {splitEndDate?.day}
              </h1>
              <h3 className="font-semibold uppercase text-[17px] max-sm:text-[14px]">
                {splitEndDate?.month}
              </h3>
              <h3 className="font-semibold text-[17px] max-sm:text-[14px]">
                {splitEndDate?.year}
              </h3>
            </div>
          </div>
          <div className="flex flex-1 lg:items-start md:mt-5 lg:mt-0 lg:flex-row md:ml-0 md:flex-col lg:ml-20 max-sm:flex-col md:items-center max-sm:ml-0 max-sm:items-center">
            <Image
              src={image}
              width={100}
              height={100}
              alt=""
              className="object-contain lg:w-[100px] lg:h-[100px] md:w-[200px] md:h-[200px] max-sm:mt-5"
            />
            <div className="flex flex-col mt-4 lg:ml-6 gap-2 max-sm:ml-0 max-sm:items-center md:ml-0 md:text-center lg:text-left">
              <h2 className="capitalize font-bold md:text-xl max-sm:text-center">
                {text}
              </h2>
              <p className="capitalize max-sm:text-sm lg:text-base max-sm:text-center md:text-xl">
                {subText}
              </p>
            </div>
          </div>
          <Button
            label={"support us"}
            classes="max-sm:mt-5 md:mt-5 lg:mt-0 border-2 border-light-brown flex rounded-md justify-center items-center px-5 h-10 self-center hover:bg-light-brown hover:text-white ease-in-out duration-300 md:px-7 md:py-4"
          />
        </div>
      )}
    </>
  );
};

export default EventCard;
