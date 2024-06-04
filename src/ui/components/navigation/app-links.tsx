import { AppLinks } from "@/types/app-links";
import { RiGithubFill, RiLinkedinFill, RiPaintBrushFill } from "react-icons/ri";

const footerApplicationLinks:AppLinks[] = [
    {
        // des données mappable bouclable
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Share IT",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Portfolio",
        baseUrl: "/portfolio",
        type: "external"
    },
];

const footerUserLinks:AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal"
    },
];

const footerInformationLinks:AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    },
];

export const footerSocialNetworksrLinks:AppLinks[] = [
    {
        label: "Github",
        baseUrl: "https://github.com/Ruben-74",
        type: "external",
        icon: RiGithubFill,
    },
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/in/ruben-reisfonseca/",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Portfolio",
        baseUrl: "/#",
        type: "external",
        icon: RiPaintBrushFill,
    },
];

//Tableau qui comporte le titre ainsi qu'un tableau avec les noeuds 
export const footerLinks = [
    {
        // Un objet
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUserLinks,
    },
    {
        label: "Informations",
        links: footerInformationLinks,
    },
    {
        label: "Réseaux",
        links: footerSocialNetworksrLinks,
    }
]