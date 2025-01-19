import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";

export function DotBackground({children}: {children?: React.ReactNode}) {
  return (
    <div className="h-[50rem] w-full bg-[#01020f] bg-dot-white/[0.2] relative flex justify-center">
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#01020f] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
    
      {children}

    </div>
  );
}
