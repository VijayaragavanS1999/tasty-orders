import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MobileNav from "../MobileNav/MobileNav";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="px-10 flex items-center justify-between bg-gradient-to-r from-amber-200 to-orange-400 h-16 w-full">
       <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 w-auto" />
        <h1 className="text-2xl font-black">Tasty-Order</h1>
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
