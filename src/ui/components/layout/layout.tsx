import { BreadCrumbs } from "../breadcrumbs/breadcrumbs"
import { Container } from "../container/container";
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { UserAccountNavigation } from "../navigation/user-account-navigation"

interface Props{
    children?: React.ReactNode
    isDisplayBreadCrumbs?: boolean;
    withSidebar?: boolean;
}
export const Layout = ({children, isDisplayBreadCrumbs = true, withSidebar}: Props) =>{

    let view: React.ReactElement = <></>;

    if (withSidebar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3">
                        <UserAccountNavigation/>
                    </div>
                    <div className="col-span-9">{children}</div>
                </div>
            </Container>
        )
    }
    else {
        view = <>{children}</>
    }
    return (
        <>
        {/* barre de navigation */}
        <Navigation/>
        {/* Fil d'ariane */}
        {isDisplayBreadCrumbs && <BreadCrumbs/>}
        {/* children ici donne l'autorisation au layout qui sera appelé dans index.tsx d'afficher les components enfants */}
        {view} 
        {/* Pied de page */}
        <Footer/>
        </>
    )
}