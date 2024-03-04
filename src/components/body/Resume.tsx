import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import './body.css'

const Resume = () => {
    const [openResume, setOpenResume] = useState(false)
    const toggleResume = () => {
        setOpenResume(prevState => !prevState)
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
                className='bg-transparent p-0 m-0 flex flex-col decoration-transparent'
                onClick={toggleResume}
            ><Image
                src='/svgs/analysis-resume.svg'
                alt='terminal icon'
                width={50}
                height={50}
            /><h1>Resume</h1></Button>

            { openResume && (
                <div className="resume-container text-black"
                    style={{ top: position.y, left: position.x }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div className="resume-header">
                        <h1>Resume</h1>
                        <Button
                            variant={'link'}
                            className='p-0 m-0 decoration-transparent'
                            onClick={toggleResume}
                        >
                            <h1>❌</h1>
                        </Button>
                    </div>
                    <div className="resume-body">
                        <div className="resume-left">
                            left
                        </div>
                        <div className="resume-right">
                            right
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Resume