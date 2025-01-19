import React from "react";

export function GridBackground() {
  return (
    <div className="h-[80vh] w-full bg-[#01020f]  bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center rounded-lg bg-[#01020f] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        
      </div>
      
    </div>
  );
}
