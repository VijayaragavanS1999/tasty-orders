import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileNav = () => {
  return (
    <Sheet>
        <div>

      <SheetTrigger><GiHamburgerMenu /></SheetTrigger>
        </div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome to Tasty - Orders</SheetTitle>
          <SheetDescription className="text-1xl mb-5" >
            One Step behind the taste the entire taste of Tasty orders, Just LogIn.
          </SheetDescription>

          <Button className="mt-2">LOGIN</Button>
          
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav