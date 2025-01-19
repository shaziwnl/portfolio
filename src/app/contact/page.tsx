import { DotBackground } from "@/components/DotBackground"
import EmailForm from "@/components/EmailForm"
import Link from "next/link"
import { AiFillHome } from "react-icons/ai"

function Contact() {
  return (

      <div className="flex flex-col mt-6 md:h-[90vh] items-center justify-center ">

        {/* <div className="absolute top-7 left-10 transition-transform transform duration-300 hover:scale-125">
          <Link href='/'>
            <AiFillHome className="text-4xl text-white"/>
          </Link>
        </div> */}
        

        <DotBackground>  
          <EmailForm/>    
        </DotBackground>
        
      </div>
    
  )
}

export default Contact