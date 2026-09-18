"use client";
import { useState } from 'react'
import Logo from '@/../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from "lucide-react";
import { useUser } from '@clerk/nextjs';
import { SignUpButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


const Nav = () => {
    const { isSignedIn, isLoaded, user } = useUser();
    const router = useRouter();
    const onSend = () => {
        if (!isSignedIn) {
            router.push('/sign-in');
            return;
        }
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div id='nav-bar'>
            <div className='flex items-center justify-center font-bold text-md md:text-xl'><div className="p-2 md:pl-15"><Image src={Logo} id='logo' alt='Logo'></Image></div>Safarnama.ai</div>
            
            <div className="md:block hidden">
            <ul className='flex gap-10'>
                <li><Link href="/" className="text-md md:text-lg text-white hover:text-orange-400">Home</Link></li>
                <li><Link href="/contact" className="text-md md:text-lg text-white hover:text-orange-400">Contact</Link></li>
                <li><Link href="/pricing" className="text-md md:text-lg text-white hover:text-orange-400">Pricing</Link></li>
            </ul>
            </div>

            <div className='text-sm sm:block hidden md:text-md'>
                {!user?<SignUpButton mode='modal'>
                    <button className="bg-orange-400 text-white hover:bg-orange-500 transition-all duration-75 font-bold py-2 px-4 rounded-lg cursor-pointer">
                               Get Started
                    </button>
                </SignUpButton>:
                    <button className="bg-orange-400 text-white hover:bg-orange-500 transition-all duration-75 font-bold py-2 px-4 rounded-lg cursor-pointer">
                        <Link href='/create-new-trip'>Create New Trip</Link> 
                </button>
                } 
            </div>

            {/* mobile nav */}
            <div className="md:hidden block">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white cursor-pointer">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/60 backdrop-blur-md p-6">
                    <ul className="flex flex-col items-center gap-6`">
                        <li>
                            <Link href="/home" className="text-md md:text-lg text-white hover:text-orange-400">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className="text-md md:text-lg text-white hover:text-orange-400">
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link href="/signin" className="text-md md:text-lg text-white hover:text-orange-400">
                                Pricing
                            </Link>
                        </li>

                        <li>
                            {!user?<SignUpButton mode='modal'>
                            <button className="bg-orange-400 text-white hover:bg-orange-500 transition-all duration-75 font-bold py-2 px-4 rounded-lg cursor-pointer">
                               Get Started
                            </button>
                            </SignUpButton>:
                            <button className="bg-orange-400 text-white hover:bg-orange-500 transition-all duration-75 font-bold py-2 px-4 rounded-lg cursor-pointer">
                              <Link href='/create-new-trip'>Create New Trip</Link> 
                            </button>
                            }
                        </li>
                    </ul>
                </div>
            )}
            </div>
        </div>
    )
}

export default Nav