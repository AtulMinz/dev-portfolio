"use client"

import BackgroundImage from "@/app/components/BackgroundImage";
import { motion } from "framer-motion";
import Clock from "react-live-clock";

export default function Hero() {
    return (
        <div className="overflow-hidden">
            <BackgroundImage />
            <motion.div
                className="h-screen w-full flex justify-center items-center flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
            >
                <p
                    className="text-6xl  mt-4 font-bold z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 relative text-transparent text-center"
                >Hello World, I&apos;m Atul Minz</p>
                <p
                    className="mt-2 text-[1.1rem] md:text-[1.8rem] lg:text-[2rem] md:text-xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 md:py-3 w-[70%] text-center"
                >A Full Stack Web Developer</p>
                <p
                    className="md:text-[1.2rem] lg:text-[1.3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3 w-[70%] text-center"
                >It&apos;s currently
                    <span className="font-bold mx-1">
                        <Clock
                            format={"h:mm:ssa"}
                            ticking={true}
                            timezone={"Asia/Kolkata"}
                            noSsr={false}
                        />
                    </span>{" "}
                    here in Jamshedpur, India📍
                </p>
            </motion.div>
        </div>
    )
}