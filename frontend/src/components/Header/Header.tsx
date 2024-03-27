import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  return (
    <div className="px-10 flex items-center justify-between bg-orange-500 h-16 w-full">
      <Link to="/" className="text-2xl text-b">
        Tasty-Order
      </Link>
      <div className="flex gap-3">

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>


      <Button variant="outline">Login</Button>
      <div className="md:hidden">
        <MobileNav />
      </div>
      </div>
    </div>
  );
};

export default Header;
