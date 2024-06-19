import { FormType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormType;
}

export const ForgetPasswordForm = ({ form }: Props) => {
  //destructuring pour eviter form.isLoading... et ecrire directement control
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      {/* {...register("email")} c'est l'id du champ qui est email  */}
      {/*  {required:{value:true ,message: "Ce champ est requis !" : est une securité permettant de rendre obligatoire le champ en afficnaht un message si c'est pas rempli */}
        <Input
            isLoading={isLoading}
            placeholder="johndoe@gmail.com"
            type="email"
            register={register}
            errors={errors}
            errorMessage="Tu dois renseigner ce champ !"
            id="email" //doit etre le meme nom que l'id dans l'interface RegisterFormFieldType - @types/forms.tsx
        />

        <Button isLoading={isLoading} type="submit" fullWith>
            Envoyer
        </Button>
    </form>
  );
};