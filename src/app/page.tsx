import { DotBackground } from "@/components/DotBackground";
import { FloatingNav } from "@/components/FloatingNav";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { IconBriefcaseFilled, IconHomeFilled } from "@tabler/icons-react";
import { ImProfile } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "@/components/Spotlight";
import WorkExperience from "@/components/WorkExperience";
import BorderButtonTwo from "@/components/BorderButtonWorkExp";
import Evaluations from "@/components/Evaluations";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import BorderButtonResume from "@/components/BorderButtonResume";



export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHomeFilled className="h-4 w-4 text-white" />,
    },
    {
      name: "Work Experience",
      link: "/about",
      icon: <IconBriefcaseFilled className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IoIosCall className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Resumé",
      link: "/contact",
      icon: (
        <ImProfile className="h-3.5 w-4 text-white" />
      ),
    },
  ];

  return (
    
    <div className="pb-52">
    
      <FloatingNav navItems={navItems} />

      <Spotlight className='top-28 left-80 h-[60vh] w-[50vw]' fill='#edcfff'/>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 sm:-top-10 h-screen' fill='white'/>      
    
      <Spotlight className='top-28 left-60 h-[60vh] w-[50vw]' fill='#edcfff'/>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 sm:-top-10 h-screen' fill='white'/>      

      <DotBackground>
          <TextGenerateEffect header={true} duration={4} filter={false} words="Sharang Goel - Software Developer | Designer | Engineer" />

          <div className="flex flex-col items-center gap-16 md:gap-28 mt-64">
            <BorderButtonResume icon={<FaLocationArrow />} />
            <WorkExperience />
            <Evaluations />
            <Education />
            <Projects />
          </div>
          
      </DotBackground>   
      
    </div>
    
  );
}
