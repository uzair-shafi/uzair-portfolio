"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { technologies } from "@/main.config";
import { useRouter } from "next/navigation";
import { projects, testimonials } from "@/main.config";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const router = useRouter();

   const [currentTab, setCurrentTab] = React.useState(technologies[0]);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);

  const tabs = technologies.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setCurrentTab(tab)}
      className={`${
        currentTab.name === tab.name
          ? "bg-primary-500 text-neutral-100"
          : "text-neutral-400 bg-neutral-800"
      } mb-4 rounded-lg px-4 py-2`}
    >
      {tab.name}
    </button>
  ));

  React.useEffect(() => {
    setShouldAnimate(false);
    const timer = setTimeout(() => setShouldAnimate(true), 0);
    return () => clearTimeout(timer);
  }, [currentTab]);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  const aboutControls = useAnimation();

  const projectsControls = useAnimation();
  const skillsControls = useAnimation();
  const testimonialsControls = useAnimation();
  const contactControls = useAnimation();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  

  const scrollContainerRef = useRef(null);
  const border1Ref = useRef();
  const border2Ref = useRef();
  const border3Ref = useRef();
  const border4Ref = useRef();
  const border5Ref = useRef();

  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const testimonialsRef = useRef();
  const contactRef = useRef();

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current?.offsetLeft);
    setScrollLeft(scrollContainerRef.current?.scrollLeft);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current?.offsetLeft;
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

 

  useEffect(() => {
    const borders = [
      { ref: border1Ref, controls: controls1 },
      { ref: border2Ref, controls: controls2 },
      { ref: border3Ref, controls: controls3 },
      { ref: border4Ref, controls: controls4 },
      { ref: border5Ref, controls: controls5 },
    ];
    let currentBorderIndex = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          borders[currentBorderIndex].controls.start("visible");
          observer.unobserve(entry.target);
          currentBorderIndex += 1;
          if (currentBorderIndex < borders.length) {
            const nextBorder = borders[currentBorderIndex].ref.current;
            if (nextBorder) {
              observer.observe(nextBorder);
            }
          }
        }
      },
      { threshold: 0.5 },
    );

    const firstBorder = borders[currentBorderIndex].ref.current;
    if (firstBorder) {
      observer.observe(firstBorder);
    }

    return () => {
      if (currentBorderIndex < borders.length) {
        const borderToUnobserve = borders[currentBorderIndex].ref.current;
        if (borderToUnobserve) {
          observer.unobserve(borderToUnobserve);
        }
      }
    };
  }, [controls1, controls2, controls3, controls4]);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
    };
  }, [aboutControls]);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, [skillsControls]);

  useEffect(() => {
    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        projectsObserver.unobserve(projectsRef.current);
      }
    };
  }, [projectsControls]);

  useEffect(() => {
    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          testimonialsControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        testimonialsObserver.unobserve(testimonialsRef.current);
      }
    };
  }, [testimonialsControls]);

  useEffect(() => {
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        contactObserver.unobserve(contactRef.current);
      }
    };
  }, [contactControls]);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-screen flex-col items-center justify-center p-8 lg:p-32"
      >
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-4 rounded-lg bg-neutral-800 p-2 font-medium shadow-lg 2xl:text-lg">
            <div className="hi">👋</div> Hi There, I&apos;m Uzair Shafi
          </div>
          <h1 className="text-center text-3xl font-bold lg:text-4xl 2xl:text-5xl">
            I Build{" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              Websites
            </span>
            ,{" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              
            </span>
            {" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              Smart Contracts
            </span>{" "}
            and{" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              More
            </span>{" "}
            <span className="rocket text-3xl">🚀</span>
          </h1>
          <p className="text-md mt-2 text-center lg:mt-4 lg:text-xl 2xl:text-2xl">
          Elevating digital experiences: crafting exceptional Full Stack web magic!
          </p>
        </div>
        <div className="mt-4 flex w-full flex-row items-center justify-center gap-2">
        <Link href="/uzair-resume.pdf"  target="_blank" rel="noopener noreferrer">
          <button
            className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-10 py-2 font-bold text-white shadow-lg transition-colors"
            
          >
          Get My Resume
          </button>
          </Link>
       
        </div>
      </motion.main>

      <motion.div
        ref={border1Ref}
        initial="hidden"
        animate={controls1}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-32"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-700" />
      </motion.div>

      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        id="about"
        className="mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:flex-row lg:items-start lg:p-32"
      >
        <div className="flex w-full flex-col items-start justify-center lg:w-2/3">
          <div className="flex flex-row items-center justify-start gap-2">
            
            
            
            <h2 className="text-center text-4xl font-bold">
              About Me<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="mt-2 text-left text-xl md:pr-[100px]">
          Enthusiastic Full Stack Web Developer with a keen eye for design and a pulse on modern trends and technologies. Also skilled in CMS platforms and passionate about blockchain development, bringing ideas to life with captivating digital experiences!
          </p>
        </div>
        <div className="mt-10 flex w-full flex-row items-center justify-center gap-2 lg:mt-10 lg:w-1/3 lg:justify-end">
          <Image
            src="/img/linkedin.png"
            width={256}
            height={256}
            alt="BinaryBlazer"
            className=" h-64 w-64 rounded-[20px]   shadow-lg transition-transform duration-50 ease-in-out hover:translate-y-[-4px] hover:transform"
            draggable="false"
          />
        </div>
      </motion.section>

      <motion.div
        ref={border2Ref}
        initial="hidden"
        animate={controls2}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-32"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-700" />
      </motion.div>



      <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:mt-0 lg:p-32"
    >
      
      <div className=" flex w-full flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-start gap-2">
       
        
          <h2 className="text-center text-4xl font-bold">
            Technologies I Use<span className="text-primary-500">.</span>
          </h2>
        </div>
       
      </div>
      <div className="mt-8 w-full">
        <div className="flex flex-row items-center justify-start gap-2 overflow-x-auto">
          {tabs}
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col items-start justify-center">
      
        <motion.div
          className=" grid  w-full grid-cols-2 items-center justify-start gap-2 md:grid-cols-3 lg:grid-cols-4"
          transition={{ duration: 0.2, staggerChildren: 0.15 }}
        >
          {currentTab.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex w-full transform flex-row items-center justify-start gap-2 rounded-lg border border-neutral-800 p-2 text-center transition-transform duration-150 ease-in-out hover:translate-y-[-4px]"
              initial={shouldAnimate ? { opacity: 0, y: 10 } : {}}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              exit={shouldAnimate ? { opacity: 0, y: 10 } : {}}
              transition={
                shouldAnimate ? { duration: 0.2, delay: index * 0.1 } : {}
              }
            >
              <div className="rounded-md bg-neutral-900 p-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </div>
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>

    <motion.div
        ref={border3Ref}
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-32"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-700 " />
      </motion.div>

      <motion.section
        ref={projectsRef}
        initial="hidden"
        animate={projectsControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        id="projects"
        className="mx-auto md:-mt-[50px] flex min-h-screen w-full flex-col items-start justify-center bg-gradient-to-b from-transparent via-neutral-900/90 to-neutral-900 p-8 lg:p-32"
      >
        <div className="flex w-full flex-col items-start justify-center">
          <div className="mb-8 flex w-full flex-col items-start justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
             
             
              <h2 className="text-4xl font-bold">
                Projects<span className="text-primary-500">.</span>
              </h2>
            </div>
            <p className="mt-2 text-left text-xl">
              Here are some of the projects I&apos;ve done.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-4 lg:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className="z-[-1] flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-neutral-800 p-4 shadow-lg"
              >
                <Image
                  src={project.banner}
                  alt={project.title}
                  width={512}
                  height={256}
                  unoptimized
                  className="h-auto w-full rounded-lg bg-neutral-900 shadow-lg"
                  draggable="false"
                />
                <div className="mt-2 flex w-full flex-row items-center justify-start">
                  
                  <div className="flex flex-row items-center justify-start gap-2">
                    <h3 className=" text-2xl font-bold">{project.title}</h3>
                    
                  </div>
                </div>
                <p className="text-left text-xl">{project.description}</p>
                <div className="mt-4 flex w-full flex-row items-center justify-start gap-2">
                  {/*
                <button
                  className="flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
                  onClick={() => router.push(project.link)}
                >
                  View Project
                </button>
                */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-end gap-2">
          <button
            className="bg-primary-500 hover:bg-primary-600 -mt-20 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white shadow-lg transition-colors"
            onClick={() => router.push("/projects")}
          >
            View All Projects
          </button>
        </div>
      </motion.section>

      <motion.div
        ref={border4Ref}
        initial="hidden"
        animate={controls4}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-32"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-700" />
      </motion.div>

      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        id="testimonials"
        className="mx-auto flex min-h-screen w-full flex-col items-start justify-center p-8 lg:p-32"
      >
        <div className="mb-8 flex w-full flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            
            <h2 className="text-4xl font-bold">
              Testimonials<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="mt-2 text-left text-xl">
            Here are some testimonials from people I&apos;ve worked with.
          </p>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex h-full max-w-full flex-row items-center justify-start gap-4 overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={(e) => onMouseDown(e)}
          onMouseUp={() => onMouseUp()}
          onMouseLeave={() => onMouseLeave()}
          onMouseMove={(e) => onMouseMove(e)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mb-4 flex h-full w-full min-w-[38rem] flex-col items-start justify-start gap-4 rounded-lg border border-neutral-800 p-4 shadow-lg"
            >
              <div className="flex w-full flex-col items-start justify-center">
                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                <h4 className="text-primary-500 text-xl font-bold">
                  {testimonial.title}
                </h4>
              </div>
              <p className="text-left text-lg">{testimonial.message}</p>
            </div>
          ))}
         
        </div>
      </motion.section>

      <motion.div
        ref={border5Ref}
        initial="hidden"
        animate={controls5}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-32"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-700 " />
      </motion.div>

      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        id="contact"
        className="mx-auto flex -mb-[130px] w-full flex-col items-start justify-center p-8 lg:p-32"
      >
        <div className="mb-10 flex w-full flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
           
            <h2 className="text-4xl font-bold">
              Contact Me<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="mt-2 text-left text-xl">
            Want to work together or just say hi? Feel free to reach out to me.
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-4 lg:w-1/2">
            <button
              className="flex w-full items-center justify-start gap-2 rounded-lg border border-neutral-800 px-6 py-4 hover:bg-neutral-800 font-bold text-white  transition-colors "
              onClick={() => router.push("mailto:uzairshaffi654@gmail.com")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-message-square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Email Me
            </button>
            <button
              className="flex w-full items-center justify-start gap-2 rounded-lg border border-neutral-800 px-6 py-4 font-bold text-white  transition-colors hover:bg-neutral-800"
              onClick={() => router.push("https://www.linkedin.com/in/uzair-shafi/")}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
              Linked In
            </button>
          </div>
         
        </div>
      </motion.section>
    </>
  );
}
