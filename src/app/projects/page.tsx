"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/projects";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-inherit">
      <motion.div
        className="flex justify-center p-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-5 grid lg:grid-cols-2 gap-20 sm:grid-cols-1">
          {projects.map((project) => (
            <div className="card bg-base-100 shadow-xl" key={project.name}>
              <figure>
                <img
                  src={project.image}
                  alt="project"
                  className="w-[100%] h-72"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Link</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default page;
