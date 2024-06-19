import { Button } from "@/ui/design-system/button/button"
import { footerSocialNetworksrLinks } from "./app-links"
import {v4 as uuidv4 } from 'uuid';
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";

interface Props{
    theme?: "gray" | "accent" | "secondary";
    className?: string
}

export const SocialNetworksButtons = ({className, theme="accent"} :Props) =>{


    const icoList = footerSocialNetworksrLinks.map((socialNetwork) =>(
        <Button 
            key={uuidv4()} 
            variant="icon" 
            iconTheme={theme}
            //socialNetwork.icon peut etre indifined on transmet une valeur par defaut si on a pas l'info
            //si socialNetwork.icon est transmise on lui envoi une icon du tableau sinon on l'affectue une icon par defaut comme ça icon est tjr alimenté et supprime l'erreur d'undifined pas supporté par IconType
            icon={{icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill }}
            // baseUrl={socialNetwork.baseUrl}
            // linkType={socialNetwork.type}
        />
    ))
    return (
        <div className={clsx(className, "flex items-center gap-2.5")}>{icoList}</div>
    )
}