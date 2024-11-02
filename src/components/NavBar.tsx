import React, { useState, useEffect } from "react";
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isBlurry, setIsBlurry] = useState(false);
  const navItems = ["Home", "Skills", "Projects", "Contact"];

  const handleScroll = () => {
    const homeSection = document.querySelector(".home");
    if (homeSection) {
      const homeBottom = homeSection.getBoundingClientRect().bottom - 90;
      if (homeBottom <= 0) {
        setIsBlurry(true);
      } else {
        setIsBlurry(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsSheetOpen(false);
  };

  return (
    <div
      data-aos-once="true"
      data-aos="fade-down"
      className={`navbar h-20 flex items-center flex-row px-6 py-8 md:px-36 ${isBlurry ? "blurry" : "transparent"}`}
    >
      <a href="#home">
        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-12 h-12 md:w-12 md:h-12 3xl:w-14 3xl:h-14" src="logo.png" alt="personal logo" />
      </a>
      <div className="flex-grow"></div>{" "}
      {/* This will push the next item to the end */}
      {/* Desktop */}
      <NavigationMenu className="md:pr-14 hidden md:flex">
        <NavigationMenuList className="flex flex-row space-x-4 md:space-x-5">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <motion.a
                className={`${navigationMenuTriggerStyle()} text-white md:text-lg 3xl:text-xl cursor-pointer font-poppins font-semibold`}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={handleLinkClick}
              >
                {item}
              </motion.a>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* Mobile */}
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="text-white">
            <AlignJustify size={40} />
          </SheetTrigger>
          <SheetContent className="bg-[#4a4949]">
            <nav className="flex flex-col mt-9 gap-5">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <motion.a
                      className="block py-2 px-4 text-white h-14 text-xl font-poppins font-semibold"
                      href={`#${item.toLowerCase()}`}
                      whileTap={{ scale: 1.1 }}
                      onClick={handleLinkClick}
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