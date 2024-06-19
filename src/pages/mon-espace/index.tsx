import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { UserAccountContainer } from "@/ui/modules/landing-page/user-profile/user-account/user-account.container";


export default function Connexion() {
  return (
    <>
      <Seo 
        title="Mon espace" 
        description="Description de la page" 
    />

      <Layout withSidebar>
        <UserAccountContainer/>
      </Layout>
    </>
  );
}