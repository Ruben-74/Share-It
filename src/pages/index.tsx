//component
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page/landing-page.container";


export default function Home() {
  return (
    <>
      <Seo title="Share IT" description="Ruben create next app" />

      {/* le paramètre isDisplayBreadCrumbs passé en Props dans layout.tsx permet d'effacer le fil d'ariane lorsqu'on se trouve
      dans le layout avec une valeur boolean qui est par defaut a true */}
      <Layout isDisplayBreadCrumbs = {false}>
        {/* ici LandingPageContainer est un children de Layout et a l'autorisation du composant parent d'afficher ces elements */}
        <LandingPageContainer/>
      </Layout>
    </>
  );
}
