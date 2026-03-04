import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const handleOnClick = () => {
  authClient.signOut();
  toast.success("You have been signed out.");
  redirect("/");
};

export default function SignOutButton() {
  return (
    <Button onClick={handleOnClick} variant="outline" size="icon-sm">
      <LogOut />
    </Button>
  );
}
