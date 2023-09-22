"use client";

import { pusiga } from "@public/assets/events";
import Image from "next/image";
import Button from "./Button";
import { formatDate, hasDatePassed, splitDate } from "@utils";
import { useEffect } from "react";

interface IEvent {
  image: string;
  startDate: string;
  endDate: string;
}

const EventCard = ({ image, startDate, endDate }: IEvent) => {
  const splitStartDate = splitDate(startDate);
  const splitEndDate = splitDate(endDate);
  //Convert date string to a Date object
  const convertDate = new Date(endDate);
  const formattedDate: string = formatDate(convertDate);
  // const formattedDate =

  const dateNotPassed = hasDatePassed(formattedDate);
  return (
    <>
    {dateNotPassed && ( <div className="flex padding cursor-pointer max-sm:flex-col max-sm:items-center">
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
        <div className="flex flex-1 ml-20 max-sm:flex-col max-sm:ml-0 max-sm:items-center">
          <Image
            src={image}
            width={100}
            height={100}
            alt=""
            className="object-contain max-sm:mt-5"
          />
          <div className="flex flex-col mt-4 ml-6 gap-2 max-sm:ml-0 max-sm:items-center">
            <h2 className="capitalize font-bold max-sm:text-center">
              pusiga medical outreach
            </h2>
            <p className="capitalize">pusiga</p>
          </div>
        </div>
        <Button
          label={"support us"}
          classes="max-sm:mt-5 border-2 border-light-brown flex rounded-md justify-center items-center px-5 h-10 self-center hover:bg-light-brown hover:text-white ease-in-out duration-300"
        />
      </div>)}
    </>
  );
};

export default EventCard;
