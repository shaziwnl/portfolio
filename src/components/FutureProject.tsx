import React from 'react'
import { cn } from '@/lib/utils'

function FutureProject({img, left, right, description} 
  : {
    img: string, 
    left?: true, 
    right?: true, 
    description?: string
  }
) {

  const leftClass = left ? '-translate-x-16 sm:-translate-x-5 md:-translate-x-20' : ''
  const rightClass = right ? 'translate-x-16 sm:translate-x-5 md:translate-x-20' : ''

  return (
    
    <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 md:w-auto w-[75vw]">
      <div className={cn("bg-slate-950 rounded-lg h-[17.5vh] md:w-[22vw] overflow-hidden flex items-center text-center", left === true ? "pr-10" : "pl-10")}>
        {right === true && <p className=' text-white md:text-base text-xxs'>{description}</p>}
        <img className={cn("h-[20vh] md:h-[22vh]", leftClass, rightClass)} src={img}></img>
        {left === true && <p className=' text-white md:text-base text-xxs'>{description}</p>}
      </div>
    </div>
  )
}

export default FutureProject