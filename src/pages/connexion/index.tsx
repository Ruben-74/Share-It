import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LoginContainer } from "@/ui/modules/landing-page/authentification/login/login.container";


export default function Connexion() {
  return (
    <>
      <Seo 
        title="Connexion sur Share IT" 
        description="Page de connexion" 
    />

      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}