import { FeaturedListInterface } from "@/types/featuredListInterface";
import { Container } from "@/ui/components/container/container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import {v4 as uuidv4 } from 'uuid';


const featuresData : FeaturedListInterface[] = [
    {
        imagePath: "/assets/svg/resource.svg",
        imageAlt: "Illustration",
        title: "Ressources",
        description:"Consulte et partage des ressources pour les devs",
    },
    {
        imagePath: "/assets/svg//training.svg",
        imageAlt: "Illustration",
        title: "Entrainement",
        description:"Entraîne-toi à devenir meilleur et trouve de l' inspiration",
    },
    {
        imagePath: "/assets/svg/visibility.svg",
        imageAlt: "Illustration",
        title: "Visibilité",
        description:"Expose tes projets et crée toi des opportunités !",
    },
    {
        imagePath: "/assets/svg/relation.svg",
        imageAlt: "Illustration",
        title: "Relations",
        description:"Connecte-toi avec des devs web et booste ta carrière !",
    }

]


export const FeaturedView = () =>{

    const featuredList = featuresData.map((feature) =>(
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className=" relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
                <Image 
                    fill
                    src={feature.imagePath}
                    alt={feature.imageAlt} 
                    // blur-2xl permet de changer la couleur du cercle par rapport a la couleur de l'image 
                    className="object-scale-down blur-2xl"
                />
                {/* cependant il desactive l'image il faut creer une deuxieme image sans la propriété blur */}
                <Image 
                    fill
                    src={feature.imagePath}
                    alt={feature.imageAlt} 
                    // l'image prend que la taille disponible du cercle
                    className="object-scale-down"
                />
            </div>
            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>
            <Typography variant="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>
    ));


    return(
        <div className="bg-gray-300">
            <Container className="grid grid-cols-12 gap-24 py-24">
                <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
                <div className="flex flex-col justify-between col-span-5 gap-10">
                    <div>
                        <Typography variant="h2" component="h2" className="mb-5">
                            L’endroit le plus cool pour devenir développeur
                        </Typography>
                        <Typography variant="body-lg" component="p" theme="gray" className="mb-8">
                            Du partage, des connexions et des formations notre app gère tout ça pour toi. Rejoins la communauté et grimpe en grade. Let's go !
                        </Typography>
                        <Button variant="secondary" baseUrl="/connexion" icon={{ icon : RiArrowRightLine }} iconPosition="right">Commencer</Button>
                    </div>
                    <div>
                    <Typography variant="caption3" component="div" theme="gray" className="mb-5">
                        Nos réseaux sociaux
                    </Typography>
                    <SocialNetworksButtons/>
                    </div>
                </div>
            </Container>
        </div>
    );
}