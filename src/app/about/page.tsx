"use client";

import { motion } from "framer-motion";
import Aboutme from "@/app/components/Aboutme";
export default function About() {
  return (
    <div className="bg-inherit min-h-screen">
      <motion.div
        className="lg:w-1/2 sm:w-full lg:p-10 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex justify-center">
          <Aboutme />
        </div>
      </motion.div>
    </div>
  );
}
