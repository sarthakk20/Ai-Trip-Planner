"use client"
import React, { useEffect, useState } from 'react'
import Nav from '@/app/_components/Nav'
import Footer from '@/app/_components/Footer'
import { useMutation } from 'convex/react'
import { CreateNewUser } from '../../convex/user'
import {useUser} from '@clerk/nextjs'
import { api } from '../../convex/_generated/api'
import { UserDetailsContext } from '../../context/UserDetailsContext'
import { useContext } from 'react'

const Provider = ( 
    {children}: { children: React.ReactNode 
    } ) => {
        const [userDetail,setUserDetail] = useState<any>();

        const CreateUser = useMutation(api.user.CreateNewUser);
        const { user } = useUser()

        useEffect(()=>{
            user&& CreateNewUser()
        },[user])

        const CreateNewUser = async ()=>{
            if(user){

                const result = await CreateUser(
                    {
                        name: user?.fullName ??'',
                        email: user?.primaryEmailAddress?.emailAddress??'',
                        imageUrl: user?.imageUrl,
                    }
                )
                setUserDetail(result)
            }
        }
    return (
        <>
        <UserDetailsContext.Provider value={{userDetail,setUserDetail}}>
            <Nav />
            {children}
            <Footer />
        </UserDetailsContext.Provider>
        </>
    )
}

export default Provider
export const useuserDetails = ()=>useContext(UserDetailsContext)