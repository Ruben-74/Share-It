import { Container } from "@/ui/components/container/container"
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormType } from "@/types/forms";

interface Props{
  form: FormType
}

// on recupere le props form de l'interface exporté de @types/forms pour transmettre les données que contient 
//l'objet form au composant <RegisterForm/>
export const RegisterView = ({form}:Props) =>{
    return (
      <Container className="grid grid-cols-2 gap-20 mb-32">
        <div className="flex items-center">
          <div className="relative w-full h-[531px]">
            <Image
              fill
              width={0}
              height={0}
              src="/assets/svg/inscription.svg"
              priority
              alt="description d'une image d'attente"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Box padding_y="py-5">
            <div className="flex items-center justify-between">
                <Typography variant="h5" component="h1">
                  Inscription
                </Typography>
                <div className="flex items-center gap-2">
                    <Typography 
                        variant="caption4"
                        component="span" 
                        theme="gray"
                    >
                        Tu as déja un compte ?
                    </Typography>
                    <Typography 
                        variant="caption4" 
                        component="span" 
                        theme="primary"
                    >

                        <Link href="/connexion">Connexion</Link>
                    </Typography>
                </div>
            </div>
            <RegisterForm form={form}/>
            <Typography 
              variant="caption4"
              theme="gray"
              className="max-w-md mx-auto space-y-1 text-center"
            >
              <div>En t’inscrivant, tu acceptes les</div>
              <div>
                <Link href="/#" className="text-gray">
                  Conditions d'utilisation 
                </Link>
                {""} et la {""}
                <Link href="/#" className="text-gray">
                  Politique de confidentialité
                </Link>
              </div>
            </Typography>
          </Box>
        </div>
      </Container>
    );
}