import React from 'react'

function BorderButtonWorkExp({icon}: 
    {
        icon?: React.ReactNode
    }
) {


  return (    
    
        <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            
            <div className="gap-2 flex items-center">
                <p className="font-semibold text-white text-xs md:text-2xl">
                    View Details
                </p>
                {icon}
            </div>

        </div>
        </button>
    
  )
}

export default BorderButtonWorkExp