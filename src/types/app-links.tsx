import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

//Interface qui fait reference a un seule noeud 
export interface AppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
    icon?: IconType
}

//Interface qui fait reference aux titres et noeuds dans sont ensemble
export interface FooterLinks{
    label: string;
    links: AppLinks[];
}