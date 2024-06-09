import { BreadCrumbs } from "../breadcrumbs/breadcrumbs"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"

interface Props{
    children: React.ReactNode
    isDisplayBreadCrumbs?: boolean;
}
export const Layout = ({children, isDisplayBreadCrumbs = true}: Props) =>{
    return (
        <>
        {/* barre de navigation */}
        <Navigation/>
        {/* Fil d'ariane */}
        {isDisplayBreadCrumbs && <BreadCrumbs/>}
        {/* children ici donne l'autorisation au layout qui sera appelé dans index.tsx d'afficher les components enfants */}
        {children} 
        {/* Pied de page */}
        <Footer/>
        </>
    )
}