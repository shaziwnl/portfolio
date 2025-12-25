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
          title="SWE Intern" 
          icon="/stripe.png" 
          company="Stripe" 
          description="Incoming Software Engineer Intern for Winter 2026"
        />

        <WorkCardMagic
          title="SWE Intern" 
          icon="/meta.png" 
          company="Meta" 
          description="Revamped the permissions system for an internal tool, reducing permission modification time from 30 minutes to 30 seconds"
        />

        <WorkCardMagic
          title="Software Dev Intern" 
          icon="/td-lab-nobg.png" 
          company="TD Bank" 
          description="Saved users 20+ minutes per banking session by integrating the Plaid API for an open banking solution"
        />
        
        <WorkCardMagic 
          title="Full-Stack Eng Intern" 
          icon="/questrade-nobg.png"
          company="Questrade"
          description="Developed the roll up options feature for the questrade library using TypeScript. Engineered automated tests using JMeter for improved efficiency"
        />

      </motion.div>

      <Link className="mb-5" href="/work-experience">
        <BorderButtonWorkExp icon={<FaLocationArrow />} />
      </Link>
      
    </>
  )
}

export default WorkExperience