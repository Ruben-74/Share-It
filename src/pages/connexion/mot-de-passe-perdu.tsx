import { FormType } from "@/types/forms";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ForgetPasswordContainer } from "@/ui/modules/landing-page/authentification/forget-password/forget-password.container";


export default function ForgetPassword() {
  return (
    <>
      <Seo 
        title="Mot de passe oublié sur Share IT" 
        description="Page de mot de passe oublié" />

      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}