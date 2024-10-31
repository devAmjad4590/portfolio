import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu.tsx";

import { AlignJustify } from "lucide-react";
import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavBar() {
  const navItems = ["Home", "Skills", "Projects", "Contact"];

  return (
    <div className="flex items-center flex-row px-6 py-8 md:px-36 absolute top-0 left-0 right-0 w-full">
      <a href="#home">
        <motion.img whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} className="w-12 h-12" src="logo.png" alt="personal logo" />
      </a>
      <div className="flex-grow"></div>{" "}
      {/* This will push the next item to the end */}
      {/* Desktop */}
      <NavigationMenu className="md:pr-14 hidden md:flex">
        <NavigationMenuList className="flex flex-row space-x-4 md:space-x-5">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <motion.a
                className={`${navigationMenuTriggerStyle()} text-white md:text-lg cursor-pointer font-poppins font-semibold`}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{scale: 0.8}}
              >
                {item}
              </motion.a>
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
                    <motion.a
                      className="block py-2 px-4 text-white h-14 text-xl font-poppins font-semibold"
                      href={`#${item.toLowerCase()}`}
                      whileTap={{scale: 1.1}}
                      
                    >
                      {item}
                    </motion.a>
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
