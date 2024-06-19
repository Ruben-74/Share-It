import { ForgetPasswordFormFieldType} from "@/types/forms";
import { ForgetPasswordView } from "./forget-password.view"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { sendEmailToResetPassword } from "@/api/authentication";
import { useRouter } from "next/router";


export const ForgetPasswordContainer = () =>{
    
      //generer un state
      const [isLoading, setIsLoading] = useState<boolean>(false);

      //redigirer vers une routre il  faut appleler le hook router
      const router = useRouter();
    
      const {
        handleSubmit, //permet de declancher le formulaire
        formState: { errors }, //un objet qui comportent toutes les erreurs et l'affiche correctement
        register, //
        setError, //permet de denoncer une erreur si une condition est pas respecter pour un champs du formulaire en particulier
        reset, //rafraichis le formulaire
    
        //useForm() defint les données qui vont etre transmisent à react hook form par des types
      } = useForm<ForgetPasswordFormFieldType>(); //ici le type RegisterFormField est une interface qui est importé permettant de limiter les données que le form contient et de securiser
    
      const handleResetPassword = async ({email}: ForgetPasswordFormFieldType) => {
        const {error} = await sendEmailToResetPassword(email);
    
          if (error) {
            setIsLoading(false);
            toast.error(error.message)
            return;
          }
          // @ todo document user
          toast.success(`Un email a été expédié à l'adresse ${email}`)
          setIsLoading(false);
          reset();
          router.push("/connexion")
      };

      //button qui envoi les info a Firebase
      const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (formData) => {
        setIsLoading(true);
        handleResetPassword(formData)
        // console.log("formData", formData);
      };

      return (
        <ForgetPasswordView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit, // permet de jouer la fonction onSubmit dans la vue sur le boutton qui sera incroporé dans la vue du formulaire
                isLoading,
            }}
        />
      );
    
}