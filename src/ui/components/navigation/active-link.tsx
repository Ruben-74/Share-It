import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props{
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({href, children} : Props) =>{

    const router = useRouter();

    // console.log("router :: ", router);
    // console.log("href :: ", href);

    // si route.pathname = a href on envoi true ou false
     const isActive: Boolean= useMemo(() =>{
        return router.pathname === href
     }, [router.pathname, href])

    return(
        //si c'est actif tu met cette classe sinon tu fais rien ....
        <Link href={href} className={clsx(isActive && "text-primary text-medium")}>
            {children}
        </Link>

    )
}