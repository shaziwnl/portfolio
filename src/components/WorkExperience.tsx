"use client";

import Link from "next/link"
import WorkCardMagic from "./WorkCardMagic"
import { FaLocationArrow } from "react-icons/fa"
import { motion } from "framer-motion"
import BorderButtonWorkExp from "./BorderButtonWorkExp"

function WorkExperience() {
  return (
    <>
      <h1 id="work-experience" className="text-xl font-semibold md:text-5xl text-white">Work Experience</h1>
      
      <motion.div animate={{ y: [100, 0], opacity: [0, 100] }} transition={{ ease: ["easeIn"], delay: 0.25, duration: 1 }} className="mt-0 flex md:gap-20 gap-16 flex-col md:flex-row">  

        <WorkCardMagic
          title="Software Engineer" 
          icon="/maang.png" 
          company="?" 
          description="Incoming Software Engineer Intern for Summer 2025"
        />

        <WorkCardMagic
          title="Software Developer" 
          icon="/td-lab-nobg.png" 
          company="TD Bank" 
          description="Currently working as a software developer at TD's Innovation team"
        />
        
        <WorkCardMagic 
          title="Full-Stack Engineer" 
          icon="/questrade-nobg.png"
          company="Questrade"
          description="Developed the roll up options feature for the questrade library using TypeScript. Engineered automated tests using JMeter for improved efficiency. Saved user income by fixing a critical bug in the new front-end in Angular."
        />
        
        <WorkCardMagic 
          title="Software Developer" 
          icon="/tcs-resized.png" 
          company="Tata Consultancy Services" 
          description="Accelerated the report generation of product reviews for Walmart Canada using Scikit-Learn. Enhanced the TCS resume screening accuracy using PyPDF2 and the OpenAI API."
        />

      </motion.div>

      <Link className="mb-5" href="/work-experience">
        <BorderButtonWorkExp icon={<FaLocationArrow />} />
      </Link>
      
    </>
  )
}

export default WorkExperience