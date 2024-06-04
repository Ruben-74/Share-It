//component
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

//design system
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

//icon
import { RiUser6Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="Share IT" description="Ruben create next app" />

      <Layout>
        <LandingPageContainer/>
      </Layout>
    </>
  );
}
