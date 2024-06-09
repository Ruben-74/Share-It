import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HeroTopView = () =>{
    return (
        <Container className="relative pt-40 pb-52">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h1" component="h1" className="max-w-lg" >
                    Rejoins les singes codeurs !
                </Typography>
                <Typography variant="body-lg" theme="gray" component="p" className="max-w-2xl" >
                    Ici, on se prend pas la tête, mais on code comme des bêtes !<br></br>       
                    Rejoins notre tribu de singes codeurs, partage tes projets les plus fous <br></br> 
                    et fais-toi de nouveaux amis développeurs.
                </Typography>
                <div className="space-x-5 pt-2.5">
                    <Button baseUrl="">Commencer</Button>
                    <Button baseUrl="" variant="secondary">En savoir plus</Button>
                </div>
                <Image
                    src="/assets/svg/evolution.svg"
                    alt="Illustration d'une fusée pour matérialiser l'évolution du level des développeurs front-end"
                    width={560}
                    height={560}
                    priority
                    className="absolute inline-block top-12 right-0 blur-lg"
                >
                </Image>
                <Image
                    src="/assets/svg/evolution.svg"
                    alt="Illustration d'une fusée pour matérialiser l'évolution du level des développeurs front-end"
                    width={560}
                    height={560}
                    priority
                    className="absolute inline-block top-12 right-0"
                >
                </Image>
            </div>
        </Container>
    )
}