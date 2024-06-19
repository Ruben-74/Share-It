//interface generique qui comportent les paramètres du register.container pour le contenir dans l'objet form 
// et le passer en props dans les vues et dans le formulaire register.form.tsx
//Il y a le meme nombre de parametres initialisé (6) que le composant declaré RegisterView dans register.container
export interface FormType{
    control?:any;
    onSubmit:any;
    errors:any;
    isLoading: boolean
    register:any;
    handleSubmit:any
}


// types des elements compris à l'interieur du formulaire d'enregistrement 
export interface RegisterFormFieldType {
    email:string,
    password:string;
    how_did_hear:string;
}

export interface LoginFormFieldType {
    email:string,
    password:string;
}

export interface ForgetPasswordFormFieldType {
    email:string,
}