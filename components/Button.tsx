import Image from "next/image";

const Button = ({
  type,
  label,
  img,
  classes,
}: {
  type: any;
  label: any;
  img?: any;
  classes?: any;
}) => {
  return (
    <button className="" type={type}>
      {img && (
        <Image
          src=""
          alt="arrow right icon"
          className={`ml-2 rounded-full w-5 h-5 ${classes}`}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
