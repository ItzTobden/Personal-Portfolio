'use client'

import Header from '@/components/header/Header'
import StarterLoading from '@/components/ui/loading/loading-starter';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface RootPageProps {
    isLoggedIn: boolean;
}

function RootPage({ isLoggedIn }: RootPageProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
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
                RootPage
            </div>
        ) : (
            <StarterLoading />
        )}
        </>
    )
}

export default RootPage
