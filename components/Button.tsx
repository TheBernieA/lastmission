import Image from "next/image";

interface IButton {
  type?: string;
  label: string;
  img?: string;
  classes?: string;
}

const Button = ({ type, label, img, classes }: IButton) => {
  return (
    <button className={`${classes}`} type={type || 'button'}>
      {img && (
        <Image
          src=""
          alt="arrow right icon"
          className={`ml-2 rounded-full w-5 h-5 `}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
