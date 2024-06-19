import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props{
    isLoading: boolean;
    placeholder:string;
    type?: "text" | "password" | "email";
    register: any;
    errors: any;
    errorMessage?: string; //affiche un message 
    id: string; // id qui se trouve dans le register 
    required?: boolean;
    isAutocompleted?: boolean //desactiver l'auto-completion

}

export const Input = ({
  isLoading,
  placeholder,
  type ="text",
  register,
  errors,
  errorMessage="Tu dois renseigner ce champ !",
  id,
  required =true,
  isAutocompleted = false,
}: Props) => {
    
    return (
        <div className="space-y-2">
            <input
                type={type}
                placeholder={placeholder}
                className={clsx( //focus:outline-none permet d'annuler le focus du navigateur et styliser le notre
                    // focus:ring-1 : taille | focus:ring-primary : couleur
                    isLoading && "cursor-not-allowed",
                    errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                    "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary" 
                )}
                disabled={isLoading}
                {...register(id, {
                    required: {
                    value: required,
                    message: errorMessage,
                    },
                })}
                autoComplete={isAutocompleted ? "on" : "off"} //permet d'avoir le controle l'auto-remplissage des champs
            />
            {/* Si ta une erreur ecrit la ... */}
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {/* ?. permet d'afficher le message d'erreur generé par errors[id] 
                    ou celui qu'on a ecrit a la main si aucune valeur saisie */}
                     {errors[id]?.message}
                </Typography>
            )}
        </div>
    );
};
