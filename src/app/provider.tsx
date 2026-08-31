import React from 'react'
import Nav from '@/_components/Nav'
import Footer from '@/_components/Footer'

const Provider = ( 
    {children}: { children: React.ReactNode 
    } ) => {
    return (
        <>
            <Nav />
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default Provider