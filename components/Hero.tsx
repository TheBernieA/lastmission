import { hero } from "@public/assets/images";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero min-h-screen hero__bg">
      <div className="relative flex flex-col flex-1 pt-36 padding-x xl:padding-l wide:padding-r">
        <h1 className="hero__title text-white uppercase">
          The nations gospel <br />{" "}
          <span className="text-light-brown">medical </span>missions
        </h1>
        <p className="hero__subtitle mb-10 w-[50%] rounded-[12px] ">
          To bring healing and hope to communities in need through compassionate
          medical care and the message of Christ's love
        </p>
      </div>
      <Image src={hero} fill alt="hero image" className="object-cover" />
    </section>
  );
};

export default Hero;
