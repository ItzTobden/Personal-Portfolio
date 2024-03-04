'use client'

import React, { useState } from 'react'
import './footer.css'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Folder = () => {
    const [openFolder, setOpenFolder] = useState(false)
    const toggleFolder = () => {
        setOpenFolder(prevState => !prevState)
    }

    //  State for dragging the panels around
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [dragging, setDragging] = useState(false)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    // Handling Mouse movement and state
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true)
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        })
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            })
        }
    }
    const handleMouseUp = () => {
        setDragging(false)
    }
    
    return (
        <>
            <Button
                variant={'link'}
                className='bg-transparent p-0 m-0'
                onClick={toggleFolder}
            ><Image
                src='/svgs/Icons_folder.svg'
                alt='folder icon'
                width={50}
                height={50}
            /></Button>

            { openFolder && (
                <div className="folder-container"
                    style={{ top: position.y, left: position.x }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div className="folder-header">
                        <h1>📂 My Folder</h1>
                        <Button
                            variant={'link'}
                            className='decoration-transparent p-0 m-0'
                            onClick={toggleFolder}
                        >❌</Button>
                    </div>
                    <div className="folder-wrapper">
                        file
                    </div>
                </div>
            )} 
        </>
    )
}

export default Folder