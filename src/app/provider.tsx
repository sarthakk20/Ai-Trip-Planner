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
import { TripContextType, TripDetailContext } from '../../context/TripDetailContext'
import { TripInfo } from '@/app/create-new-trip/_component/ChatBot'

const Provider = ( 
    {children}: { children: React.ReactNode 
    } ) => {
        const [userDetail,setUserDetail] = useState<any>();
        const [tripDetailInfo,setTripDetailInfo] = useState<TripInfo | null>(null);

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
        <TripDetailContext.Provider value={{tripDetailInfo,setTripDetailInfo}}>
            <Nav />
            {children}
            {/* <Footer /> */}
        </TripDetailContext.Provider>
        </UserDetailsContext.Provider>
        </>
    )
}

export default Provider
export const useuserDetails = ()=>useContext(UserDetailsContext)
export const useTripDetail = ():TripContextType | null => useContext(TripDetailContext);