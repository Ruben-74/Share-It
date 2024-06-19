import { FormType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props{
    form:FormType;
}

// on recupere le props form de l'interface exporté de @types/forms pour transmettre les données que contient 
//l'objet form au formulaire afin que <RegisterForm/> puisse appeller dans la vue register.view 

export const RegisterForm = ({form}:Props) =>{
    //destructuring pour eviter form.isLoading... et ecrire directement control
    const { onSubmit, errors, isLoading, register, handleSubmit } = form;

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
                {/* {...register("email")} c'est l'id du champ qui est email  */}
                {/*  {required:{value:true ,message: "Ce champ est requis !" : est une securité permettant de rendre obligatoire le champ en afficnaht un message si c'est pas rempli */}
                <Input
                  isLoading={isLoading}
                  placeholder="johndoe@gmail.com"
                  type ="email"
                  register = {register}
                  errors= {errors}
                  errorMessage="Tu dois renseigner ce champ !"
                  id="email" //doit etre le meme nom que l'id dans l'interface RegisterFormFieldType - @types/forms.tsx
                />

                <Input
                  isLoading={isLoading}
                  placeholder="Mot de passe"
                  type ="password"
                  register = {register}
                  errors= {errors}
                  errorMessage="Tu dois renseigner ce champ !"
                  id="password" //doit etre le meme nom que l'id dans l'interface RegisterFormFieldType - @types/forms.tsx
                />

                <Input
                  isLoading={isLoading}
                  placeholder="Comment nous as-tu connus ?"
                  type ="text"
                  register = {register}
                  errors= {errors}
                  errorMessage="Tu dois renseigner ce champ !"
                  id="how_did_hear" //doit etre le meme nom que l'id dans l'interface RegisterFormFieldType - @types/forms.tsx
                />

                <Button isLoading={isLoading} type="submit" fullWith>S'inscrire</Button>

                {/* include validation with required or other standard HTML validation rules
                <input placeholder="text2"{...register("exampleRequired", { required: true })} />
                ecoute et afficher si ily a une erreur l'erreur pour le imput au nom exampleRequired on affiche "This field is required" 
                {errors.exampleRequired && <span>This field is required</span>} */}
            </form>
      )
}