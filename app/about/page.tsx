'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'

const About = () => {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) return <div>Loading...</div>
    if (!isSignedIn) return <div>Sign in to see  your profile</div>
    if (isSignedIn && user) {
        return (
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold'>Welcome {user.firstName} {user.lastName}</h1>
                <p className='text-lg'>Your email is {user.emailAddresses[0].emailAddress}</p>
            </div>
        )
    }
}

export default About