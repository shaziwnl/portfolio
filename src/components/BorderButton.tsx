import React from 'react'

function BorderButton({icon}: 
    {
        icon?: React.ReactNode
    }
) {


  return (    
    <button className="relative inline-flex lg:h-14 h-10 overflow-hidden rounded-lg p-[1px] ">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm text-white backdrop-blur-3xl">
        
            <div className="gap-2 flex items-center">
                <p className="font-semibold text-white text-base sm:text-sm lg:text-lg">
                    View Resumé
                </p>
                {icon}
            </div>
            
    </span>
    </button>
  )
}

export default BorderButton