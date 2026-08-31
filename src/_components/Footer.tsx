import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div id='footer-main'>
            <div id='left'>
                <ul>
                    <li><Link href="">About Us</Link></li>
                    <li><Link href="">Contact Us</Link></li>
                    <li><Link href="">Pricing</Link></li>
                </ul>
            </div>
            <div id='center'>
                <ul>
                    <li><Link href="">About Us</Link></li>
                    <li><Link href="">Contact Us</Link></li>
                    <li><Link href="">Pricing</Link></li>
                </ul>
            </div>
            <div id='right'>
                <ul>
                    <li><Link href="">About Us</Link></li>
                    <li><Link href="">Contact Us</Link></li>
                    <li><Link href="">Pricing</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer