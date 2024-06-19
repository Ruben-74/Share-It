import { firebaseLogoutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";
import { Typography } from "@/ui/design-system/typography/typography";

export const UserAccountNavigation = () => {

  //DECONNEXION USER ACCOUNT

  const handleLogOutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientôt sur Share IT");
  };

  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" weight="medium">
            <ActiveLink href="/mon-espace">Mon Compte</ActiveLink>
        </Typography>
    
        <Typography variant="caption2" weight="medium">
            <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
        </Typography>
      </div>

      <Button action={handleLogOutUser} variant="danger">Déconnexion</Button>
    </Box>
  );
};
