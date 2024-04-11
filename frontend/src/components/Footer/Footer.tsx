import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="z-50 px-10 flex items-center justify-between bg-gradient-to-r from-amber-200 to-orange-400 h-16 w-full ">
       <Link to="/" className="flex items-center">
        <h1 className="text-1xl font-black">Tasty-Orders.com</h1>
      </Link>
      <div className="flex gap-3">
       <h5 className="cursor-pointer">Private Policy</h5>
       <h5 className="cursor-pointer">Terms and conditions</h5>
      </div>
    </div>
  );
};

export default Footer;
