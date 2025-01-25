"use client";
import React, { useEffect, useState } from 'react'
import FutureProject from './FutureProject'
import Project from './Project'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiSqlite } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiGoogleadmob } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiChromewebstore } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Projects() {


  const [multiplier, setMultiplier] = useState(1); // Default value for large screens

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setMultiplier(0.5); // Smaller size for smaller screens
      } else if (screenWidth < 768) {
        setMultiplier(0.5); // Larger gradient width for larger screens
      } else {
        setMultiplier(1);
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
        
        <h1 className="text-xl font-semibold md:text-5xl text-white">Past • Present • <span className='text-[#edcfff]'>Future</span></h1>

        <div className='flex md:flex-row flex-col gap-24 w-[88vw] justify-center'>
            <div className='flex flex-col gap-5 pb-20 items-center'>
              <FutureProject img='/awscp.png' left description='I plan to complete the AWS CLF-C02 certification in January'/>
              <FutureProject img='/threejs-trophy-nobg.png' right description="I have joined the Three.js Journey to deepen my understanding of 3D web design"/>
              <FutureProject img='/mongodbad.png' left description='Being a huge fan of MongoDB, I hope to complete their developer associate certificate this winter'/>
            </div>

            <div className='h-[60vh] w-[50vw] ml-2 flex flex-col justify-center'>

              <div className='flex md:h-[60vh] w-[100vw] md:w-[50vw] md:justify-between gap-10 flex-wrap'>
                <Project title="Valorant Lineup Companion" technologies={
                  [<SiTypescript size={30 * multiplier}/>, <FaReact size={35 * multiplier}/>, 
                   <SiExpo size={30 * multiplier}/>, 
                   <SiSqlite size={30 * multiplier}/>, <SiGoogleadmob size={28 * multiplier} />, 
                  ]}
                  description=" The most up-to-date Valorant lineup app for all maps and agents Available on both IOS and Android (In development)"
                  link="https://github.com/shaziwnl/Valorant-Lineup-Companion"
                />

                <Project title='ReText Chrome Extension' technologies={
                  [<SiJavascript size={30 * multiplier}/>, <FaReact size={35 * multiplier}/>, 
                   <FaPython size={30 * multiplier}/>, <SiFlask size={30 * multiplier}/>,
                   <SiChromewebstore size={30 * multiplier}/>,
                  ]}
                  description='Chrome extension that helps users in their writing, texting and reading needs'
                  link='https://chromewebstore.google.com/detail/retext/odiaofbnmdhgdlibchfcageipnldeceh'
                />
                <Project title='Atlas Online Game' technologies={
                  [<SiMongodb size={30 * multiplier}/>, <SiExpress size={30 * multiplier}/>,
                    <FaNodeJs size={30 * multiplier}/>, <FaReact size={35 * multiplier}/>,
                    <TbBrandSocketIo size={35 * multiplier}/>
                  ]}
                  description='An online multiplayer geography game based on the popular Indian childhood game - Atlas'
                  link="https://atlas-game.netlify.app/"
                />

                <div className='md:hidden sm:flex-row sm:justify-center sm:gap-10 sm:items-center sm:ml-8 flex flex-col justify-around ml-auto mr-auto'>
                  <a href='https://github.com/shaziwnl/' target='_blank'>
                    <FaGithub size={100 * multiplier} color='white' className='hover:scale-110 hover:cursor-pointer'/>
                  </a>
                  
                  <a href="https://www.youtube.com/@shaz101/shorts" target='_blank'>
                    <FaYoutube size={100 * multiplier} color='white' className='hover:scale-110 hover:cursor-pointer'/>
                  </a>

                  <a href="https://www.linkedin.com/in/sharang-goel/" target='_blank'>
                    <FaLinkedin size={100 * multiplier} color='white' className='hover:scale-110 hover:cursor-pointer'/>
                  </a>
                </div>
              </div>

              <div className='hidden md:flex flex-row justify-around mb-10'>
                  <a href='https://github.com/shaziwnl/' target='_blank'>
                    <FaGithub size={100} color='white' className='hover:scale-110 hover:cursor-pointer'/>
                  </a>
                  
                  <a href="https://www.youtube.com/@shaz101/shorts" target='_blank'>
                    <FaYoutube size={100} color='white' className='hover:scale-110 hover:cursor-pointer'/>
                  </a>

                  <a href="https://www.linkedin.com/in/sharang-goel/" target='_blank'>
                    <FaLinkedin size={100} color='white' className='hover:scale-110 hover:cursor-pointer'/>
                  </a>
                  
              </div>

            </div>

        </div>
    </>
  )
}

export default Projects