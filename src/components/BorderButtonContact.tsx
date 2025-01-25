import React from 'react'

function BorderButtonContact({icon}: { icon?: React.ReactNode }) {

  return (    
    
        <button className="p-[3px] relative transition duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white bg-transparent">
                    <div className="gap-2 md:gap-7 flex items-center">
                        <p className="font-medium text-white text-sm md:text-6xl md:mb-3">
                            Connect
                        </p>
                        {icon}
                    </div>
                </div>
        </button>
    
  )
}

export default BorderButtonContact