import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiArrowRightDoubleLine, RiArrowRightLine } from "react-icons/ri";
import { MdLibraryAddCheck } from "react-icons/md";

export const HighlightListView = () =>{
    return (
        <Container className="py-24 space-y-10">
            <div className="flex justify-center gap-24">
                <div className="w-[520px] h-[350px] relative">
                    <Image 
                        fill
                        src="/assets/svg/cake2.svg"
                        alt="Illustration d'un gateau"
                    />
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h3" component="h2">
                        De novice à développeur en un clin d'œil !
                    </Typography>
                    <div className="space-y-7">
                        <ListPoint>Progresser rapidement.</ListPoint>
                        <ListPoint>Inspire-toi.</ListPoint>
                        <ListPoint>Gagne de l'assurance.</ListPoint>
                        {/* inline block permet d'etre un element bloquant mais qui prend pas toute la plce disponible il prend la place du contenu du button*/}
                        <div className="relative inline-block">
                            <Button 
                                baseUrl="/#" 
                                icon={{icon: RiArrowRightDoubleLine}} 
                                iconPosition="right">

                                Let's go !
                            </Button>
                            <Image 
                                width={25} 
                                height={27} 
                                src={"/assets/svg/cursor.svg"} 
                                alt="un curseur..." 
                                className="absolute right-7 -bottom-5"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse justify-center gap-24 pt-10">
                <div className="w-[520px] h-[350px] relative">
                    <Image 
                        fill
                        src="/assets/svg/idea.svg"
                        alt="Illustration d'une toupie"
                    />
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h3" component="h2">
                        Booste ta carrière de développeur
                    </Typography>
                    <div className="space-y-7">
                        <ListPoint>Partage tes projets, obtiens des feedbacks.</ListPoint>
                        <ListPoint>Connecte-toi, élargis ton réseau pro !</ListPoint>
                        <ListPoint>Reste inspiré, motivé avec notre communauté.</ListPoint>
                        {/* inline block permet d'etre un element bloquant mais qui prend pas toute la plce disponible il prend la place du contenu du button*/}
                        <div className="relative inline-block">
                            <Button 
                                variant="secondary"
                                baseUrl="/#" 
                                icon={{icon: RiArrowRightLine}} 
                                iconPosition="right">
                               Démarrer 
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );

};

interface Props{
    children: React.ReactNode
}


const ListPoint = ({children}: Props) =>{

    return( 
        <div className="flex items-start gap-2">
            <MdLibraryAddCheck size={24} className="mt-1.5 text-secondary"/>
            <Typography variant="body-lg" component="span">
                {children}
            </Typography>
        </div>
    )
}