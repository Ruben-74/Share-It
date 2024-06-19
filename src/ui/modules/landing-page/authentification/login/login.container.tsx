import { useEffect } from "react";
import { LoginView } from "./login.view";
import { LoginFormFieldType } from "@/types/forms";

//hook
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/useToogle";

//api
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { firebaseSignInUser } from "@/api/authentication";

//notif
import { toast } from "react-toastify";
import { useRouter } from "next/router";


export const LoginContainer = () => {

  //hook router
  const router = useRouter()

  //generer un states
  const {value: isLoading, setValue: setIsLoading} = useToggle();

  //permet de voir sur la console si on est connecté ou pas 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user",user);
      }else{
        console.log("t pas connecté")
      }
    });
  }, []);

  const {
    handleSubmit, //permet de declancher le formulaire
    formState: { errors }, //un objet qui comportent toutes les erreurs et l'affiche correctement
    register, //
    setError, //permet de denoncer une erreur si une condition est pas respecter pour un champs du formulaire en particulier
    reset, //rafraichis le formulaire

    //useForm() defint les données qui vont etre transmisent à react hook form par des types
  } = useForm<LoginFormFieldType>(); //ici le type RegisterFormField est une interface qui est importé permettant de limiter les données que le form contient et de securiser

  //CONNECTER UN USER 
  const handleSignInUser = async ({email, password}: LoginFormFieldType) =>{

    const {error} = await firebaseSignInUser(email,password)
    
    if (error) {
      setIsLoading(false);
      toast.error(error.message)
      return;
    }
    // @ todo document user
    toast.success("Bienvenue sur l'app de partage Share IT")
    setIsLoading(false);
    reset();

    //la fonction push rediectionne vers une route apres connexion
    router.push("/mon-espace")
  }

  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    setIsLoading(true);
    const {password} = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      }); 
      setIsLoading(false)
      return; //ca arrete l'envoi a l'api si c'est pas respecté et execute pa la suite du code pq elle retourne
    }
    handleSignInUser(formData);
  };

  return (
    <LoginView
        form={{
            errors,
            register,
            handleSubmit,
            onSubmit, // permet de jouer la fonction onSubmit dans la vue sur le boutton qui sera incroporé dans la vue du formulaire
            isLoading,
        }}
    />
  );
};
