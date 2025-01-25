"use client";

import React, { useEffect, useState } from 'react'
import { FaHandshake, FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'
import BorderButtonContact from './BorderButtonContact'
import { FaMessage } from 'react-icons/fa6';
import { MdOutlineConnectWithoutContact, MdOutlineMessage } from 'react-icons/md';

function ContactMe() {

    const [multiplier, setMultiplier] = useState(1); // Default value for large screens
    
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
            setMultiplier(0.4); // Smaller size for smaller screens
            } else if (screenWidth < 768) {
            setMultiplier(0.4); // Larger gradient width for larger screens
            } else {
            setMultiplier(1);
            }
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
        <Link className="mt-10 pb-12 md:pb-32" href="/contact">
            <BorderButtonContact icon={<FaHandshake color='white' size={50 * multiplier}/>} />
        </Link>
  )
}

export default ContactMe