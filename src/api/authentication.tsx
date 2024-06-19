import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth" //authentification
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";


//enregistrement user
//externalise une fonction d'enregistrement email + mdp permettant d'eviter d'injecter createUserWithEmailAndPassword partout dans le code
export const firebaseCreateUser = async (email: string , password: string) => { //async permet de s'arreter tant que les condition sont pas respecté
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password) //await patiente tant qu'il a pas un email et password et il avancera pas
        return {data:userCredential.user }
    } catch(error){

        const firebaseError = error as FirebaseError //code et messega sont reconnu par Next grace à FirebaseError qui appartient a Firebase
        //... @todo format error
        return {error:{
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}

//connexion
export const firebaseSignInUser = async (email: string , password: string) => { //async permet de s'arreter tant que les condition sont pas respecté
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password) //await patiente tant qu'il a pas un email et password et il avancera pas
        return {data:userCredential.user }
    } catch(error){

        const firebaseError = error as FirebaseError //code et messega sont reconnu par Next grace à FirebaseError qui appartient a Firebase
        //... @todo format error
        return {
            error:{
                code: firebaseError.code,
                message: firebaseError.message
            },
        }
    }
}

//déconnexion
export const firebaseLogoutUser = async () => { //async permet de s'arreter tant que les condition sont pas respecté
    try{
        //on attend pas de resultats
        await signOut(
            auth
        );
        //data pourra etre ecouté au niveau du front afin de voir ce que contient data 
        return {data: true }
        
    } catch(error){

        const firebaseError = error as FirebaseError //code et messega sont reconnu par Next grace à FirebaseError qui appartient a Firebase
        //... @todo format error
        return {
            error:{
                code: firebaseError.code,
                message: firebaseError.message
            },
        }
    }
}

//déconnexion
export const sendEmailToResetPassword = async (email: string) => { //async permet de s'arreter tant que les condition sont pas respecté
    try{
        //on attend pas de resultats
        await sendPasswordResetEmail(
            auth,
            email
        );
        //data pourra etre ecouté au niveau du front afin de voir ce que contient data 
        return {data: true }
        
    } catch(error){

        const firebaseError = error as FirebaseError //code et messega sont reconnu par Next grace à FirebaseError qui appartient a Firebase
        //... @todo format error
        return {
            error:{
                code: firebaseError.code,
                message: firebaseError.message
            },
        }
    }
}

