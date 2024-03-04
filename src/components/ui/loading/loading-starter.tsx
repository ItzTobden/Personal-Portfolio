'use client'

import './loading.css'
import Lottie from 'lottie-react'
import pikachu from '../../../../public/lotties/Animation - pikachu.json'
import React, { useEffect, useState } from 'react'

const StarterLoading: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 1)
        }
        }, 40)

        return () => clearInterval(interval)
    }, [progress])

    return (
        <div className='loading-starter-container'>
            <h1>Welcome to Drukpas Studio 🤗</h1>
            <Lottie 
                animationData={pikachu} 
                className='w-44 h-44' 
            />
            <div className="loading-bar">
                <div 
                    className="progress-bar" 
                    style={{width:`${progress}%`}}
                ></div>
            </div>
        </div>
    )
}

export default StarterLoading