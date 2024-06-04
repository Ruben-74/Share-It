//component
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

//design system
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";

//icon
import { RiUser6Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
    <Seo title="Share IT" description="Description..."/>

    <Navigation />

    <Container className="py-10 space-y-20">
      <div className="flex items-center gap-4 p-10">
      <Spinner size="small"/>
      <Spinner/>
      <Spinner size="large"/>
      </div>

      <div className="flex items-center gap-4 p-10">
      <Logo size="very-small"/>
      <Logo size="small"/>
      <Logo/>
      <Logo size="large"/>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button isLoading icon={{ icon: RiUser6Fill}} iconPosition="left">Accent</Button>
        <Button isLoading icon={{ icon: RiUser6Fill}} size="small" variant="secondary">Accent</Button>
        <Button isLoading size="small" variant="outline">Accent</Button>
        <Button isLoading size="small" variant="disabled" disabled>Accent</Button>
        <Button isLoading size="small" variant="icon" icon={{ icon: RiUser6Fill}}/>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Avatar  src="/assets/images/avatar.png" alt="" size="small"/>
        <Avatar src="/assets/images/avatar.png" alt="" />
        <Avatar src="/assets/images/lion.jpg" alt=""  size="large"/>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button size="medium" variant="secondary">Accent</Button>
        <Button size="medium" variant="outline">Accent</Button>
        <Button size="medium" variant="disabled" disabled>Accent</Button>
        <Button variant="icon" iconTheme="secondary" icon={{ icon: RiUser6Fill}}/>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button size="large" variant="secondary">Accent</Button>
        <Button size="large" variant="outline">Accent</Button>
        <Button size="large" variant="disabled" disabled>Accent</Button>
        <Button size="large" variant="icon" icon={{ icon: RiUser6Fill}}/>
      </div>

    </Container>

    </>
  );
}