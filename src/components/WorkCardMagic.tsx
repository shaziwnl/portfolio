import Image from 'next/image'
import React from 'react'

function WorkCardMagic({icon, title, company, description}: {
  icon: string,
  company: string,
  title: string,
  description: string,
}) {

  const highlightWords = ["Developed", "Engineered", "Saved", "Incoming", "Enhanced", "Accelerated", "Currently"];
  const highlightColor = "text-[#edcfff]"; // Tailwind's arbitrary color syntax

  return (
    <div className="relative inline-flex h-[25vh] w-[55vw] md:h-96 md:w-[19vw] overflow-hidden rounded-lg p-[1px] ">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full justify-center rounded-lg bg-slate-950 px-5 text-sm text-white backdrop-blur-3xl">

      <div className='flex flex-col items-center pt-4 text-center'>
        {company === "Tata Consultancy Services" && <img src={icon} alt='logo of company' className='sm:h-14 h-11 w-20 mb-8'></img>}
        {company === "Questrade" && <img src={icon} alt='logo of company' className='h-20 w-20'></img>}
        {company === "TD Bank" && <img src={icon} alt='logo of company' className='h-16 w-16 mb-5'></img>}
        {company === "Meta" && <img src={icon} alt='logo of company' className='h-12 mb-5'></img>}

        <h1 className='md:text-2xl font-semibold text-base'>{company}</h1>
        <h1 className='md:text-2xl font-normal text-sm'>{title}</h1>

        <p className="hidden md:block mt-5 text-lg">
          {description.split(" ").map((word, index) => {
            const cleanWord = word.replace(/[^a-zA-Z]/g, ""); // Remove punctuation for matching
            return highlightWords.includes(cleanWord) ? (
              <span key={index} className={`${highlightColor} font-semibold`}>
                {word}{" "}
              </span>
            ) : (
              <span key={index}>{word} </span>
            );
          })}
        </p>

      </div>

    </span>
    </div>
  )
}

export default WorkCardMagic