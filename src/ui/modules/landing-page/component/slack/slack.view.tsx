import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const SlackView = () => {
    return (
        <Container className="flex justify-between">
            <div className="flex flex-col justify-center max-w-xl space-y-5">
                <div className="flex items-center gap-2">
                    <Logo size="very-small"/>
                    <Typography variant="caption2" component="span" weight="medium"className="text-gray font-extrabold">
                        <span>[</span>Share <span className="text-primary">It ...]</span>
                    </Typography>
                </div>
                <Typography variant="h2" weight="medium" component="h2">
                    Partagez-vos travaux à travers notre plateforme
                </Typography>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                    Rejoins-nous et obtiens de l’aide, des conseils et pourquoi pas des nouveaux potes ! {" "}
                </Typography>
                <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                    A toi de jouer !
                </Button>
            </div>
            <div className="relative w-[600px] h-[600px]">
                <Image 
                    fill
                    src={"/assets/svg/logo-slack.svg"}
                    alt={"Illustration du logo slack"}
                />
            </div>
        </Container>
    )
}