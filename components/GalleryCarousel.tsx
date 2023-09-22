"use client";

import { gallery as data } from "@constants";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from "./Button";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const Responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 4,
  },
};
const Gallery = () => {
  return (
    <div className="flex flex-col">
      <h1 className="capitalize mb-5 text-center font-bold lg:text-[40px] text-center md:text-[30px] max-sm:text-[25px]">
        from our gallery
      </h1>
      <OwlCarousel
        className="owl-theme owl-carousel owl-loaded"
        responsive={Responsive}
        autoplay
        autoplayTimeout={5000}
        autoplayHoverPause
        margin={5}
        loop
        nav
        smartSpeed={800}
      >
        {data.resources.map((item, index) => (
          <div className="aspect-square" key={index}>
            <Image
              src={item.imageUrl}
              alt=""
              fill
              className="object-cover item"
            />
          </div>
        ))}
      </OwlCarousel>
      <Button
        type={"button"}
        label={"visit our gallery"}
        classes="justify-self-center text-lg capitalize mt-10 font-bold"
      />
    </div>
  );
};

export default Gallery;
