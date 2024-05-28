import clsx from "clsx";

interface Props {
    variant?:
        | "display"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "lead"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "caption1"
        | "caption2"
        | "caption3"
        | "caption4"
    component? : 
        | "h1" 
        | "h2" 
        | "h3" 
        | "h4" 
        | "h5" 
        | "div" 
        | "p" 
        | "span";

    children: React.ReactNode;

}

export const Typography = ({
    variant = "h3",
    component: Component = "div",
    children,
}: Props) => {

    let color: string = "";

    switch (variant) {
        case "display":
            color= "text-red-500";
        break;
        case "h1" :
            color= "text-green-500";
        break;
    }
    return <Component className={clsx(color)}>{children}</Component>;
};
