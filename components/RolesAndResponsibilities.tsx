import { RolesAndResponsibilities as roles } from "@constants";
import Image from "next/image";

const RolesAndResponsibilities = () => {
  return (
    <section className="">
      <h1 className="uppercase font-bold lg:text-[40px] text-center md:text-[30px] max-sm:text-[35px]">
        ROLES <span className="text-light-brown">AND</span> RESPONSIBILITIES{" "}
      </h1>
      <div className="flex flex-col gap-10">
        <h3 className="mt-10 lg:w-[50%] md:w-[50%] text-xl self-center sm:w-full max-sm:text-base text-center max-sm:mt-5">
          As a Christian medical mission, it is important to align our values
          with our actions and practices. Below are some steps to consider:
        </h3>
        <ul className="grid grid-cols-1">
          {roles.map((data, index) => (
            <li
              className="flex gap-4 lg:h-[300px] max-sm:h-fit lg:even:flex-row-reverse max-sm:flex-col"
              key={index}
            >
              <div className="flex flex-col p-3 h-full text-center text-xl justify-center w-1/2 max-sm:text-base max-sm:w-full">
                <span className="font-bold text-3xl max-sm:text-lg">
                  {data.label}
                </span>{" "}
                <br /> {data.text}
              </div>
              <div className="flex-1 h-full w-full rounded-lg overflow-hidden">
                <Image
                  src={data.image}
                  alt={`${data.label} image`}
                  className="object-cover object-center h-full w-full max-sm:h-[200px]"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="self-center text-2xl max-sm:text-base">
          By following these steps, our organization can ensure that its actions
          align with its values and effectively serve the needs of the
          community.
        </p>
      </div>
    </section>
  );
};

export default RolesAndResponsibilities;
