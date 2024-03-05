'use client'

import Desktop from '@/components/body/Desktop';
import Taskbar from '@/components/footer/Taskbar';
import Header from '@/components/header/Header'
import StarterLoading from '@/components/ui/loading/loading-starter';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function RootPage({ isLoggedIn }: any) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, [isLoading, setIsLoading])

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/')
        }
    }, [isLoggedIn, router])

    return (
        <>
        { !isLoading ? (
            <div className="root-container">
                <Header />
                <Desktop />
                <Taskbar />
            </div>
        ) : (
            <StarterLoading />
        )}
        </>
    )
}

export default RootPage
