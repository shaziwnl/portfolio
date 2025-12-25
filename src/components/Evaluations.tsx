"use client";
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee';

function Evaluations() {

  const [gradientWidth, setGradientWidth] = useState(175);
  const [speed, setSpeed] = useState(75);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setGradientWidth(75); // Smaller gradient width for smaller screens
        setSpeed(35); // Fast Speed for smaller screens
      } else {
        setGradientWidth(175); // Larger gradient width for larger screens
        setSpeed(75); // Fast Speed for larger screens
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

    <div className='flex items-center text-center flex-col'>
      <h1 className="text-xl font-semibold md:text-5xl text-white">Employer Evaluations</h1> 
      
      <Marquee className='overflow-hidden mt-16' pauseOnHover speed={speed} direction='left' gradient gradientWidth={gradientWidth} gradientColor='#01020f'>
        <div className='flex gap-28 w-[49vw] text-center justify-center items-center'>
          <div className=''>
            <p className='text-xs md:text-2xl w-[85vw] md:w-[90vw] text-white'>
            Sharang has done an incredible job during his time at Meta and has contributed significantly to the team's objectives. He has received stellar commendations from his peers as well as from other members of the team. We appreciate his work in Meta - <span className='font-semibold'>Manager (<span className='text-[#edcfff]'>Meta</span>)</span>
            </p>
          </div>
        </div>
      </Marquee>

      <Marquee className='overflow-hidden mt-16' pauseOnHover speed={speed} direction='left' gradient gradientWidth={gradientWidth} gradientColor='#01020f'>
        <div className='flex gap-28 w-[49vw] text-center justify-center items-center'>
          <div className=''>
            <p className='text-xs md:text-2xl w-[85vw] md:w-[90vw] text-white'>
            Sharang shows passion in learning new technology and is passionate about building his career as a software engineer. 
            He actively seeks tickets to work on and is able to deliver them on time.
            He keeps good relationships with the team members and open communication with direct report. - <span className='font-semibold'>Mel Liu (<span className='text-[#edcfff]'>Questrade</span>)</span>
            </p>
          </div>
        </div>
      </Marquee>

      <Marquee className='overflow-hidden mt-14' pauseOnHover speed={speed} direction='left' gradient gradientWidth={gradientWidth} gradientColor='#01020f'>
        <div className='flex gap-28 w-[49vw] text-center justify-center items-center'>
          <div className=''>
            <p className='text-xs md:text-2xl w-[75vw] md:w-[65vw] text-white'>
              He is very proactive and reaches out and follows up to ensure tasks gets done. 
              Is a curious learner and has learnt a lot on his own and developed innovative solutions 
              for the problems given to him. - <span className='font-semibold'>Abhay Srivastava (<span className='text-[#edcfff]'>TCS</span>)</span>
            </p>
          </div>
        </div>
      </Marquee>

      <Marquee className='overflow-hidden mt-14' pauseOnHover speed={speed} direction='left' gradient gradientWidth={gradientWidth} gradientColor='#01020f'>
        <div className='flex gap-28 w-[49vw] text-center justify-center items-center'>
          <div className=''>
            <p className='text-xs md:text-2xl w-[75vw] md:w-[65vw] text-white'>
            Sharang surpassed expectations with his initiative, technical skills, and teamwork. He made key contributions to projects like the ASL Virtual Interpreter and Money Management, 
            integrating the Plaid API. His work on TTS and STT models for other projects showed his interest in complex technologies. - <span className='font-semibold'>Isaiah Erb (<span className='text-[#edcfff]'>TD Bank</span>)</span>
            </p>
          </div>
        </div>
      </Marquee>      

    </div>
    
 
)
}


export default Evaluations