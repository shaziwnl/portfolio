import React from 'react'

function Education() {
  return (
    <div className='text-white'>
        <h1 className="text-xl font-semibold md:text-5xl text-white text-center">Education</h1> 
        
        <div className='flex flex-col gap-5 mt-10 md:mt-14 text-center'>
            <h1 className="text-base md:text-4xl text-white">
                <span className='text-[#edcfff] font-semibold'>University of Waterloo</span> - Bachelor of Computer Science (Honours with co-op)
            </h1> 
            
            <h2 className="text-sm md:text-3xl text-white">
            Academic Standing -&nbsp;<span 
                className="text-[#edcfff] font-semibold relative inline-block transition duration-200 cubic-bezier
                        after:content-['✨'] after:absolute after:-top-2 after:-right-10
                        after:opacity-0 hover:after:opacity-100 hover:after:animate-pulse after:z-[-1]">
                Excellent
            </span>
            </h2>
            
            <h3 className='text-center text-xs md:text-2xl'>
                <span className='text-[#edcfff] font-semibold'>Courses</span> - Compiler Design, Data Structures and Algorithms, Object Oriented Software Development
            </h3>

        </div>
    </div>
  )
}

export default Education