"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { config, projects,wpprojects } from "@/main.config";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const router = useRouter();

 
 


  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-screen w-full flex-col items-start justify-center p-8 lg:mt-0 lg:p-32"
      >
        <div className="mb-0 mt-[6rem] flex w-full flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            <h2 className="text-4xl font-bold">
              Projects<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="mt-2 text-left text-xl">
            Here are some of the projects I&apos;ve been working on recently.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start mt-8 justify-center gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border border-neutral-800 p-4 "
            >
              <Image
                src={project.banner}
                alt={project.title}
                width={1920}
                height={1080}
                className="h-[220px] w-[500px] rounded-lg object-cover "
                draggable="false"
              />
              
               
                <div className="flex w-full flex-row items-center justify-start ">
                  <h3 className=" text-2xl font-bold">{project.title}</h3>
                </div>
              
              <p className="text-left  text-xl">{project.description}</p>
              <div className="mt-4 flex w-full flex-row items-center justify-start gap-2">
              <a
              className=" border border-neutral-800  flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white  transition-colors hover:bg-neutral-800"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
              </div>
            </div>
          ))}
        </div>
      </motion.main>


      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex  w-full flex-col items-start justify-center p-8 lg:mt-0 lg:p-32"
      >
        <div className="mb-8 -mt-[150px] flex w-full flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            <h2 className="text-4xl font-bold">
              Wordpress Projects<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="mt-2 text-left text-xl">
            Here are some of the projects I&apos;ve done.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-center gap-10 lg:grid-cols-2">
          {wpprojects.map((project, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border border-neutral-800 p-4 "
            >
              <Image
                src={project.banner}
                alt={project.title}
                width={1920}
                height={1080}
                className="h-[220px] w-[500px] rounded-lg object-cover "
                draggable="false"
              />
              
               
                <div className="flex w-full flex-row items-center justify-start ">
                  <h3 className=" text-2xl font-bold">{project.title}</h3>
                </div>
              
              
              <div className="mt-4 flex w-full flex-row items-center justify-start gap-2">
              <a
              className=" border border-neutral-800  flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white  transition-colors hover:bg-neutral-800"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
              </div>
            </div>
          ))}
        </div>
      </motion.main>
    </>
  );
}
