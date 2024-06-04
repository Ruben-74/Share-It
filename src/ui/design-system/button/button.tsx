import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { IconProps } from "@/types/iconProps";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  action?: Function;
}

//les valeurs par défaut sont défini ici...
export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  action = () => {},
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  //les styles conditionnées sont ici...
  switch (variant) {
    case "accent": //default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "icon": //Default
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small": //40px
      sizeStyles = `text-caption3 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      iconSize = 18;
      break;
    case "medium": //default //50px
      sizeStyles = `text-caption2 font-medium ${
        variant === "icon"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      iconSize = 20;
      break;
    case "large": //60px
      sizeStyles = `text-caption1 font-medium  ${
        variant === "icon"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      iconSize = 24;
      break;
  }

  const buttonContent = (
    <>
        {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
            {
                //Si variant = accent ou variant = icon
                variant === "accent" || variant === "icon" ? (
                <Spinner size="small" variant="white" />
                ) : (
                //sinon
                <Spinner size="small" />
                )
            }
            </div>
        )}

        {/* La classe invisible permet de masquer le texte sans enlever le noeud */}
        <div className={clsx(isLoading && "invisible")}>
            {icon && variant === "icon" ? ( //si l'icon est passé et que le style = icon on l'affiche
            <icon.icon size={iconSize} />
            ) : (
            //sinon l'icon s'alignera a droite ou a gauche du texte {children} a l'interieur du button
            <div className={clsx(icon && "flex items-center gap-1")}>
                {/* le && c'est un ternaire plus rapide si ... est valide on le fait && sionon on fait rien */}
                {icon && iconPosition === "left" && <icon.icon size={iconSize} />}

                {children}

                {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
            </div>
            )}
        </div>
    </>
  );

  const handleClick = () =>{
        if (action) {
            action()
        }
  }

  const buttonElement = (
    <>
        <button
        type="button"
        className={clsx(
                variantStyles,
                iconSize,
                sizeStyles,
                isLoading && "cursor-wait",
                "relative animate"
        )}
        onClick={() => handleClick} disabled={disabled}
        >
            {buttonContent}
        
        </button>
    </>
  );

  if (baseUrl) {

    if (linkType === LinkTypes.EXTERNAL) {
        return (
            <a href={baseUrl} target="_blank">{buttonElement}</a>
        )
    }else {
        return <Link href={baseUrl}>{buttonElement}</Link>
    }

  }
  // le button qu'on retourne avec le contenu des variables qui seront activé dans la vue index
  return buttonElement
};
