import React from 'react'

function BorderButtonResume({icon}: 
    {
        icon?: React.ReactNode
    }
) {


  return (    
    <a href='https://drive.google.com/file/d/1_DzdwuVMv9-rbaay1a7YOxI0DfwqtYz5/view?usp=sharing' target='blank'>
        <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            
            <div className="gap-2 flex items-center">
                <p className="font-semibold text-white text-xs md:text-2xl">
                    View Resumé
                </p>
                {icon}
            </div>

        </div>
        </button>
    </a>
  )
}

export default BorderButtonResume