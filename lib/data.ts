import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Primary and Secondary Schooling",
    location: "Smt Malathi Srinivasan Mat. Hr. Sec. School",
    description:
      "My school were golden. They provided numerous opportunities to explore my skills, including projects with IoT .",
    icon: React.createElement(LuGraduationCap),
    date: "2008 - 2022",
  },
  {
    title: "Bachelor's in Information Technology",
    location: "Jaya Engineering college, Chennai",
    description:
      "Embarking on my Bachelor's inInformation technology at Jaya Engineering college has been a creative and enthusiastic journey. My eagerness towards design and development led me to this course, offering abundant ways to showcase my skills. provides opportunities to participate in hackathons and events and also allows me to coordinate them.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2026",
  },
  {
    title: "Web Development Intern",
    location: "Codesoft, Chennai",
    description:
      "As a web development intern, I honed my skills in web development, specializing in technologies like React, Next.js, TypeScript and Tailwind. Currently open to internship opportunities, I'm a front-end developer with a flair for design, committed to coding solutions for real-world problems.",
    icon: React.createElement(FaReact),
    date: "Feb-Mar 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Spay",
    description:
      "Project-the service provider imposes hefty commissions (3%-10%) on transactions, which becomes a substantial sum in large-scale operations.", 
    tags: [ "Next.js", "Express", "Tailwind", "ETH"],
    
  },
 
  {
    title: "Pizza Delivery App",
    description:
      "Developed a comprehensive pizza delivery app, PizzaPal, utilizing a robust full-stack architecture to provide a seamless user experience.",
    tags: [ "Next.js", "Express", "Taiwind" , "MongoDB"],
    
  },
  {
    title: "E-Commerce ",
    description:
      "A responsive E-Commerce website where A-Z products can be selled.",
    tags: ["React"],
    
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "MySQL",
  "Python",
  "Java",
  "C",
  "FireBase",
  "Framer Motion",
  "Bootstrap"
] as const;