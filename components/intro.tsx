"use client"

import React from 'react'
import Image from 'next/image'
import { motion} from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';



export default function Intro() {
  const {ref} = useSectionInView("Home",0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
 
  return (
    <section
      ref = {ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
         <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                >
                <Image 
                src="data:image/jpeg;base64,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"
                 alt="shilpa-image" width="192" height="192" quality="95" priority={true}
                 className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                 />
                </motion.div>
                 <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}

          >
            👋
          </motion.span>
            </div>
         </div>

         <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shilpa Kumari,</span> a{" "}
        <span className="font-bold">Information Technology student</span> who is passionate about{" "}
        <span className="font-bold"> Design.</span> I enjoy 
        <span className="italic"> building</span>.user friendly solutions,{" "}
        <span className="underline">projects, apps and sites</span>.
      </motion.h1>


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:hover:text-white/100"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition group-dark:hover:opacity-100" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:text-white/100"
          href="https://drive.google.com/file/d/1Hlh35JIvVWrDOHFCEhqlQon_Ob9kaWvX/view?usp=drivesdk"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition group-dark:hover:opacity-100" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/100"
          href="https://www.linkedin.com/in/shilpa-kumari-526622294
"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/100"
          href="https://github.com/Shilpakumari-12"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>


    </section>
  )
}
