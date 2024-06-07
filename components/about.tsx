"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {

  const {ref} = useSectionInView("About");
 

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I come from a background in {" "}
        <span className="font-medium">Information Technology, </span>with a strong passion for <span className="font-medium"> design.</span> My focus lies in <span className="italic">developing projects, apps, and websites </span> 
        to address <span className="font-medium">real-world challenges ,</span> {" "}
        Proficient in front-end technologies such as 
        <span className="font-medium">HTML, JavaScript, CSS and Bootstrap,</span>.{" "} I'm also enhancing my skills with frameworks like , 
        <span className="italic">Tailwind, React, and Next.js.</span> I'm inquisitive about emerging technologies like <span className="underline">Web3, data science and AI.</span>
        </p>
        <br/>
        <p className="mb-3">Currently a student, I'm actively seeking <span className="font-medium">internship  </span>opportunities to gain hands-on experience in my field.{" "}
        Beyond my academic pursuits, I find joy in  <span className="italic">dancing, jamming songs</span> with friends, and Travelling. I'm currently engrossed in my flagship{" "}
        <span className="font-medium"> project, 'Spay,'</span><span className="italic"> </span> It's been a challenging yet highly educational journey.
      </p>

      
    </motion.section>
  );
}