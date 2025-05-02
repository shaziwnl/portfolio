import React from 'react'


function Project({title, technologies, description, link}: {
    title: string,
    technologies: React.ReactNode[],
    description?: string,
    link: string
}) {
  return (
    
    <a href={link} target="_blank">
      <div className="overflow-clip flex w-[40vw] h-[33vh] md:h-[36vh] md:w-[15vw] justify-between flex-col bg-slate-950 backdrop-blur-md rounded-3xl shadow-[0_0_10px_5px_rgba(168,85,247,0.5)] hover:shadow-[0_0_10px_10px_rgba(168,85,247,0.8)] p-6 transition-transform transform duration-500 text-white hover:scale-105 text-center">
        <h1 className='text-sm md:text-base xl:text-2xl'>{title}</h1>

        <p className='text-xxs md:text-sm xl:text-base'>{description}</p>

        <div className='flex gap-2 md:gap-5 items-center justify-center'>
          {technologies.map((tech, index) => (
            <div key={index}>{tech}</div>
          ))}
        </div>
      </div>
    </a>

  )
}

export default Project