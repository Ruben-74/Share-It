import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "very-small" | "small" | "medium" | "big" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number = 0;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium": //Default
      sizeLogo = 88;
      break;

    case "big":
      sizeLogo = 120;
      break;

    case "large":
      sizeLogo = 140;
      break;
  }
  return (
    <div>
      <Image 
        width={sizeLogo}
        height={0}
        src="/assets/svg/logo.svg"
        alt="logo du site"
      />
    </div>
  );
};
