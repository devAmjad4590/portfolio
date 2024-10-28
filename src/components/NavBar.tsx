import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu.tsx";

import { AlignJustify } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavBar() {
  const navItems = ["Home", "Skills", "Projects", "Contact"];

  return (
    <div className="flex items-center flex-row px-6 py-8 md:px-36 absolute top-0 left-0 w-full z-10 bg-transparent">
      <a href="#home">
        <img className="w-12 h-12" src="logo.png" alt="personal logo" />
      </a>
      <div className="flex-grow"></div>{" "}
      {/* This will push the next item to the end */}
      <NavigationMenu className="md:pr-14 hidden md:flex">
        <NavigationMenuList className="flex flex-row space-x-4 md:space-x-5">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-white md:text-lg`} 
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-white">
            <AlignJustify size={40} />
          </SheetTrigger>
          <SheetContent className="bg-[#4a4949]">
          <nav className="flex flex-col mt-9 gap-5 lg:gap-5">
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="block py-2 px-4 text-white h-14 text-xl font-poppins font-semibold"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul> 
          </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default NavBar;