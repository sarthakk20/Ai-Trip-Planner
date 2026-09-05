import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div 
        className='w-full text-[10px] sm:text-sm md:text-md lg:text-lg'>
           <div 
           id='footer-main' 
           className='flex flex-col md:flex-row items-center justify-center gap-10 text-white p-6'>
             <div id='left'>
                <h2 className='pb-5 font-semibold text-orange-400'>Company</h2>
                <ul>
                    <li className='pb-1'><Link href="">About Us</Link></li>
                    <li className='pb-1'><Link href="">Contact Us</Link></li>
                    <li className='pb-1'><Link href="">Pricing</Link></li>
                </ul>
            </div>
            <div id='center'>
                <h2 className='pb-5 font-semibold text-orange-400'>Social</h2>
                <ul>
                    <li className='pb-1'><Link href="">Github</Link></li>
                    <li className='pb-1'><Link href="">LinkedIn</Link></li>
                    <li className='pb-1'><Link href="">Instagram</Link></li>
                </ul>
            </div>
            <div id='right'>
                <h2 className='pb-5 font-semibold text-orange-400'>Resources</h2>
                <ul>
                    <li className='pb-1'><Link href="">Help Center</Link></li>
                    <li className='pb-1'><Link href="">Privacy Policy</Link></li>
                    <li className='pb-1'><Link href="">Terms & Conditions</Link></li>
                </ul>
            </div>

           </div>
            <div>
                <p className='text-center text-white'>Copyright &copy; 2026 Safarnama.ai | All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer