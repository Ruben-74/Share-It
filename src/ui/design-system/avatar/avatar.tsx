import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
}

export const Avatar = ({ size = "medium", src, alt}: Props) => {
  let sizeStyles: string;

  switch (size) {
    case "small":
      sizeStyles = "w-[24px] h-[24px] ";
      break;
    case "medium": //Default
      sizeStyles = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyles = "w-[50px] h-[50px]";
      break;
  }
  return (
    //pour eviter que l'image prenne la taille de l'element parent (absolute) body on doit l'affecter la position = relative 
    <div className={clsx(sizeStyles, "bg-gray-400 rounded-full relative")}>
      <Image 
        fill //fill permet d'eviter de saisir une taille a l'image car elle prendra la taille disponible du noeud qui est placé en relative 
        src={src}
        alt={alt}
        className="object-cover object-center rounded-full"    
      />

    </div>
  );
};
