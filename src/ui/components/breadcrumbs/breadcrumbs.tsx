import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { useRouter } from "next/router"
import { RiHome3Fill } from "react-icons/ri";
import {v4 as uuidv4 } from 'uuid';
import { Container } from "../container/container";
import Link from "next/link";

export const BreadCrumbs = () =>{

    const router = useRouter();
    const asPath = router.asPath;
    const segments = asPath.split("/"); //permet de decouper le chemin par des slash et faire un tableau de string
    const lastSegment = segments[segments.length - 1];
    segments[0] = "accueil";

    const view = segments.map((path, index)=>(
        <div key={uuidv4()}>
            {/* la methode slice permet de prtendre une partie d'un tableau et de la copier slice(1) permet d'ignorer le premier element et vu
            qu'un tableau commence a 0 pour obtenir la prochaine valeur on lui ajoute (index + 1) et on lui joint un slash a la volé*/}
            <Link href={index > 0 ? `/${segments.slice(1, index + 1 ).join("/")}` :   `/`}>
            {/* ne pas oublier de mettre un slash en debut pour creer un chemin relatif et eviter d'afficher 2x le meme chemin */}
                <Typography 
                    variant="caption3" 
                    component="span" 
                    className={clsx(path !== lastSegment 
                    ? "text-gray-600" 
                    : "text-gray", "capitalize hover:text-gray animate")}
                >
                    {/*path.replace(/-/g, " ") : permet de supprimer tous les tiret de la string et les remplacer par des espaces (le g permet de les remplacer pour tous les element et pas que pour le premier element) */}
                    {path !== "accueil" ? path.replace(/-/g, " ") : <RiHome3Fill className="inline -mt-1"/>} 
                    {/* Afin de permettre a l'icon de s'aligner au text on le rend pas bloquante avec la classe inline*/}
                </Typography>
                {
                    // si le chemin est different du dernier element du tableau lastSegment alors && on affiche un slash 
                    path !== lastSegment && (
                        <Typography 
                            variant="caption2"
                            component="span" 
                            className="ml-2 text-gray-600">
                            /
                        </Typography>
                    )
                }
            </Link>
        </div>
    ))
    return (
        <Container className="flex items-center gap-2 py-7">
            {view}
        </Container>
    );
}