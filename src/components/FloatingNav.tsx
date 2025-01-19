"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit gap-1 fixed top-5 inset-x-0 mx-auto border border-white/40 rounded-full bg-[#050616] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pl-8 pr-8 py-3  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          navItem.name === "Contact" ? 
          <Link
            key={navItem.name}
            href="/contact"
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-[#edcfff]"
            )}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-lg font-semibold">{navItem.name}</span>
          </Link> :

          navItem.name === "Resumé" ? 
          <a
            key={navItem.name}
            href="https://drive.google.com/file/d/1JOsRpcEEZKhQvK71VwlN-Ka9neK1S4Bt/view?usp=sharing"
            target="_blank"
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-[#edcfff]"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-lg font-semibold">{navItem.name}</span>
          </a> :

          navItem.name === "Home" ?
          <a
            key={navItem.name}
            href="#home"
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-[#edcfff]"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-lg font-semibold">{navItem.name}</span>
          </a> :

          navItem.name === "Work Experience" ?
          <Link
            key={navItem.name}
            href="/work-experience"
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-[#edcfff]"
            )}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-lg font-semibold">{navItem.name}</span>
          </Link> :

          <></>
        ))}
    
      </motion.div>
    </AnimatePresence>
  );
};
