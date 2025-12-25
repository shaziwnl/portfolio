'use client';

import { useState, useRef, useEffect } from "react"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

function EmailForm() {
    
    const [sent, setSent] = useState(false)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    useEffect(() => {
        if (sent) {
            setTimeout(() => {
                setSent(false)
            }, 3000)
        }
    }, [sent])

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(formData)

        emailjs
            .sendForm('service_6ea9nxg', 'shaziwnl_portfolio', e.currentTarget, {
                publicKey: 'bJmG-5fTA-N6k6qyk',
            })
            .then(() => {
                console.log('Email sent successfully!')

            }, (error) => {
                console.log('Email failed to send!', error.text)
            })
            .catch((error) => {
                console.error('Email failed to send!', error.message)
            })
        
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        })

        setSent(true)

    }

    return (
        <div className="text-center flex flex-col gap-5">


            <div className="flex items-center justify-between">
                
                {/* <Link href="/" className="flex-shrink-0">
                    <AiFillHome className="text-2xl md:text-4xl text-white scale-100" />
                </Link> */}
                <div className="transition-transform transform duration-300 hover:scale-125">
                    <Link href="/" className="">
                        <AiFillHome className="text-2xl md:text-4xl text-white scale-100" />
                    </Link>
                </div>

                
                <div className="flex-grow text-center">
                    <h1 className="text-base scale-100 text-gray-300 md:text-3xl font-medium">
                    SEND ME A <span className="text-[#edcfff]">MESSAGE</span>
                    </h1>
                </div>
            </div>
            
            <form className="bg-theme-transparent h-[75vh] w-[85vw] md:w-[30vw] rounded-2xl flex flex-col items-center gap-6 md:gap-12 p-4" onSubmit={handleSubmit}>
                
                <div className="w-full md:w-[80%] flex justify-between mt-2 md:mt-8">
                    <input type="text" name="firstName" value={formData.firstName} placeholder="First Name" required className="w-[45%] pl-2 md:pl-4 p-2 md:p-3 scale-100 font-medium rounded-xl text-xs md:text-xl bg-white-transparent text-white placeholder:font-medium" onChange={handleChange}></input>
                    <input type="text" name="lastName" value={formData.lastName} placeholder="Last Name" required className="w-[45%] pl-2 md:pl-4 p-2 md:p-3 scale-100 font-medium rounded-xl text-xs md:text-xl bg-white-transparent text-white placeholder:font-medium" onChange={handleChange}></input>
                </div>
                
                <input type="email" name="email" value={formData.email} required placeholder="Email" className="w-full md:w-[80%] pl-2 md;pl-4 md:p-3 p-2 scale-100 bg-white-transparent text-white rounded-xl font-medium text-xs md:text-xl placeholder:font-semibold" onChange={handleChange}></input>

                <textarea placeholder="Message" value={formData.message} required name="message" className="w-full md:w-[80%] h-[60%] md:h-[32vh] md:pl-4  p-2 scale-100 text-white font-medium bg-white-transparent rounded-xl text-xs md:text-xl resize-none placeholder:font-semibold" onChange={handleChange}></textarea>

                
                <div className="flex w-[80%] justify-end">
                    <div >
                        {sent && 
                            <p className={`text-2xl text-[#edcfff] font-normal scale-100 mr-14`}>
                                Message Sent!
                            </p>
                        } 
                    </div>
                             
                    <button type="submit" className="px-6 py-2 bg-white-translucent text-white scale-100 text-xs md:text-lg rounded-md font-semibold hover:scale-105 transition-transform duration-100">
                        Send Message
                    </button>
                </div>
                
                
            </form>
        </div>
    )
}

export default EmailForm