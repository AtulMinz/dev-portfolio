"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { MdPerson4 } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";

interface Navlink {
  path: string;
  icon: React.ReactNode;
  name: string;
}

const links: Navlink[] = [
  { path: "/", icon: <HiHome size={22} />, name: "Home" },
  { path: "/about", icon: <MdPerson4 size={22} />, name: "About" },
  { path: "/projects", icon: <LuConstruction size={22} />, name: "Projects" },
  { path: "/contact", icon: <MdEmail size={22} />, name: "Contact" },
  { path: "/blogs", icon: <RiArticleFill size={22} />, name: "Blogs" },
];

export default function Navbar() {
  return (
    <motion.div
      className="z-[20] fixed  bottom-0 left-[1.5rem] right-[1.5rem] md:top-0 md:block md:w-[40%] py-6 lg:w-[20%] mx-auto"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-auto rounded-full text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 opacity-80 hover:opacity-100 hover:scale-110 duration-200">
        <ul className="flex justify-center justify-between py-4 px-6 rounded-full text-white/90 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-inherit dark:text-zinc-200 ring-white/10">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.path} passHref>
                <div
                  className={`cursor-pointer hover:text-violet-500 duration-150 transition-colors relative`}
                >
                  {link.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
