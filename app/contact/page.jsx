"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [blacklistedWords, setBlacklistedWords] = useState([]);

  

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:mt-0 lg:p-32"
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
    </motion.main>
  );
}
