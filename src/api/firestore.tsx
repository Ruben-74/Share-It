import { doc, updateDoc } from "firebase/firestore"; 
import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firestoreUpdateDocument = async (
    collectionName : string, 
    documentId : string, 
    data :object 
) => { //async permet de s'arreter tant que les condition sont pas respecté
    
    
    try{

        const documentRef = doc(db, collectionName, documentId);

        await updateDoc(documentRef, data);
        //on retourne les données s'il y a pas d'erreurs  
        return {data: true }
        
    } catch(error){ //en cas d'erreur on afficher un message 

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