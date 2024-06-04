import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { Logo } from "@/ui/design-system/logo/logo";
import { footerLinks } from "./app-links";
import {v4 as uuidv4 } from 'uuid';
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";

//composant qui affiche tout 
export const Footer = () => {

    const currentYear = new Date().getFullYear();

    // console.log(uuidv4()) = d3bec915-1080-4c26-879b-d59f94a2ba1b par noeud;
    
    //ça permet de boucler le composant FooterLink avec le style adequat
    const footerNavigationList = footerLinks.map((colomnLinks) =>(
        //le composant a besoin de la date et d'une key pour afficher 
        <FooterLink key={uuidv4()} data={colomnLinks}/>
    ));

    return (
        <div className="bg-gray">
        <Container className="flex justify-between pt-16">
            <div className="flex flex-col items-center gap-1">
            <Typography variant="caption1" theme="white" weight="medium">
                Share IT
            </Typography>
            <Typography variant="caption3" theme="gray">
                Partagez votre talent et créativité !
            </Typography>
            <div className="relative flex flex-col items-center justify-center pt-3">
                <Image
                    src="/assets/svg/shareFooter.svg"
                    width={229}
                    height={216}
                    alt="Share IT !"
                />
                <div className="absolute flex items-center justify-center">
                    <Logo size="large"/>
                </div>

            </div>
            
            </div>
            <div className="flex gap-7">{footerNavigationList}</div>
        </Container>
        
        <Container className="pt-9 pb-11 space-y-11">
            <hr className="text-gray-800"></hr>
            <div className="flex items-center justify-between">
                <Typography variant="caption4" theme="white">
                    {`Copyright © ${currentYear} | Propulsed by `} 

                    {/* Porfolio Ruben a rajouter */}
                    <a  href="/" 
                        target="_blank" 
                        className="underline"
                    >
                        Ruben REIS FONSECA - Ruben
                    </a>
                </Typography>
                <div className=""><SocialNetworksButtons theme="gray"/></div>
            </div>
        </Container>
        </div>
    );
};

interface footerLinkProps{
    data: FooterLinks; //c'est pas possible de mapper un objet
}

//composant qui travail sur la liste et le mapping d'un array AppLinks[] qui se trouve dans l'objet footerLinks qui est de types : FooterLinks dans types/app-links 
const FooterLink = ({data}:footerLinkProps ) => {

    //data va acceder aux tableau qui peut etre bouclable à travers data.links
    const linksList = data.links.map((link) =>(
        <div key={uuidv4()}>
            {/* si link est egal à internal ça n'ouvre pas un liens externe et sa reste dans la meme page*/}
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>   
            )}
            {/* si link est egal à external la variable assigné dans lib/link-type on joue celui la */}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">{link.label}</a>
            )}

        </div>
    ));

    return (
        <div className="min-w-[190px]">
            <Typography theme="white" variant="caption2" weight="medium" className="pb-5">{data.label}</Typography>
            <Typography theme="gray" variant="caption3" className="space-y-4">
                {linksList}
            </Typography>
        </div>
    )
}