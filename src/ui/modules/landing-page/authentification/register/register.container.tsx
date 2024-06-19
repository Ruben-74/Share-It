import { SubmitHandler, useForm } from "react-hook-form"; //hook
import { RegisterView } from "./register.view";
import { RegisterFormFieldType } from "@/types/forms";
import { useToggle } from "@/hooks/useToogle";//hook

//message de notif
import { toast } from 'react-toastify';

//Api 
import { firebaseCreateUser } from "@/api/authentication";

export const RegisterContainer = () => {

    const {value: isLoading, setValue: setIsLoading} = useToggle();

    const {
      handleSubmit, //permet de declancher le formulaire
      formState: { errors }, //un objet qui comportent toutes les erreurs et l'affiche correctement
      register, //
      setError, //permet de denoncer une erreur si une condition est pas respecter pour un champs du formulaire en particulier
      reset, //rafraichis le formulaire

      //useForm() defint les données qui vont etre transmisent à react hook form par des types
    } = useForm<RegisterFormFieldType>(); //ici le type RegisterFormField est une interface qui est importé permettant de limiter les données que le form contient et de securiser

    //CREATION d'un DOCUMENT USER DANS LA BDD
    const handleCreateUserDocument = async (collectionName: string , documentId: string, document : object) =>{

    }

    //AUTHENTIFICATION CREATION USER
    // await fonction avec async pour permettre d'attendre
    const handleCreateUserAuthentication = async ({
      email,
      password,
      how_did_hear,
    }: RegisterFormFieldType) => {
      const { error, data } = await firebaseCreateUser(email, password);
      if (error) {
        setIsLoading(false);
        toast.error(error.message)
        return;
      }
      // @ todo document user
      toast.success("Bienvenue sur l'app de partage Share IT")
      setIsLoading(false);
      reset();
    };

    // ENVOI LE FORMULER LORSQU'ON CLICK SUR LE BUTTON
    //asyncrone permet de pas s'arreter que sur cette fontion et permet de jouer le reste du code
    //SubmitHandler appartient à React et on lui apporte notre type a nous compris dans notre formulaire qu'on a creer pour les formulaires RegisterForm..
    const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
      setIsLoading(true);

      //destrucutring
      const { email, password } = formData;

      //on formate les données securité

      //si la longueur du password est inf ou égal a 5 (6 mini pour etre accepté par firebase)
      if (password.length <= 5) {
        setError("password", {
          type: "manual",
          message: "Ton mot de passe doit comporter au minimum 6 caractères",
        }); //champs concerné
        return; //ca arrete l'envoi a l'api si c'est pas respecté et execute pa la suite du code pq elle retourne
      }

      //creer un email et son password via Firebase de façon traditionnel sans factorisation api
      // createUserWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   // Signed up
      //   const user = userCredential.user;
      //   setIsLoading(false);
      //   console.log(user);
      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   setIsLoading(false);
      //   console.log(errorCode, errorMessage);
      //   // ..
      // });

      //si tt va bien envoi de la fonction à firebase
      handleCreateUserAuthentication(formData);
    };
    
    
    return (
        <>
          <RegisterView
              form={{
                  errors,
                  register,
                  handleSubmit,
                  onSubmit, // permet de jouer la fonction onSubmit dans la vue sur le boutton qui sera incroporé dans la vue du formulaire
                  isLoading,
              }}
          />
      </>
    );
};
