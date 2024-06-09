import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiPlayCircleLine } from "react-icons/ri"

export const CurrentCourseView = () =>{
    return (
        <div className="bg-gray-300">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-2.5">
                    Formations React.js gratuite
                </Typography>
                <Typography variant="lead" component="h2" weight="medium" className="mb-5">
                    Apprendre à coder l'app des singes codeurs
                </Typography>
                <Typography variant="caption3" component="p" theme="gray" className="mb-16">
                    Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
                </Typography>
                <a href="#/" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="flex flex-col items-center justify-center gap-2 relative h-full bg-gray z-10 rounded opacity-0 hover:opacity-95 animate text-white ">
                            <RiPlayCircleLine size={42} className="hover:text-primary animate"/>
                            <Typography variant="caption2" theme="white" weight="medium" className="uppercase">
                                Lire la formation
                            </Typography>
                        </div>
                        <Image 
                            fill
                            src="/assets/images/course-formation.jpg"
                            alt="Image de la formation"
                            className="object-cover object-center rounded"/>
                    </div>
                </a>
            </Container>
        </div>
    )
}