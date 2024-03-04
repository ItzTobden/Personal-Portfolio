'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import './footer.css'

const Github = () => {
    const [openGithub, setOpenGithub] = useState(false)
    const toggleGithub = () => {
        setOpenGithub(prevState => !prevState)
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
                onClick={toggleGithub}
            ><GithubOutlined 
                className='text-3xl pb-2'
            /></Button>

            { openGithub && (
                <div className="github-container"
                    style={{ top: position.y, left: position.x }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    Github Coming Soon 🫠
                </div>
            )}
        </>
    )
}

export default Github