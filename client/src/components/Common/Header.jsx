
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { ArrowRight } from "lucide-react";
const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-[12px]`}
        >
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
           to="/" className="flex items-center text-[#150B2BB3]">
          Home
        </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-[12px]`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/about" className="flex items-center text-[#150B2BB3]">
          About
        </NavLink>
        </Typography>

                <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-[12px]`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/portfolio" className="flex items-center text-[#150B2BB3]">
          Portfolio
        </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-[12px]`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/blog" className="flex items-center text-[#150B2BB3]">
          Blog
        </NavLink>
        </Typography>
        <Button icon={ArrowRight}>
          Start Project
        </Button>

     
      
      </ul>
    );
   
    return (
      <div className="max-h-[768px]  lg:max-w-[1440px] mx-auto">
        <nav className="sticky top-0 z-10 py-2  px-2 lg:px-8 lg:py-5 shadow-none border-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center">
              <Typography

                className="mr-7 cursor-pointer py-1.5 font-medium"
              >
                <NavLink to="/">
                <h1 className="font-extrabold text-[15px] lg:text-[28px] font-sans  text-black uppercase">Develop.me</h1>
                </NavLink>
              </Typography>           
            </div>

        

            <div className="flex items-center gap-2">
 <div className="mr-2 hidden lg:block">{navList}</div>   

            <IconButton
                variant="text"
                className="h-6 w-6 text-black text-inherit lg:hidden mr-4 -mt-5"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6 text-black"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

                )}
              </IconButton>
 
            </div>
          </div>
          <MobileNav open={openNav} className={`flex justify-center`}>{navList}</MobileNav>
        </nav>
      </div>
    );
};

export default Header;