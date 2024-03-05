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
                    <div className="resume-left">
                        <Image 
                            src='/images/coming-soon.jpg' 
                            alt='profile picture'
                            width={100}
                            height={100}
                        />
                        <div className="resume-contact">
                            <h1>Contact</h1>
                            <h2>Email</h2>
                            <p>👉 jigdreltsheringtobden@gmail.com</p>
                        </div>
                        <div className="resume-education">
                            <h1>Education</h1>
                            <h2>Bachelor of Science</h2>
                            <p>👉 Stamford Internation University</p>
                        </div>
                        <div className="resume-expertise">
                            <h1>Expertise</h1>
                            <h2>⭐ UI/UX</h2>
                            <h2>⭐ Front End</h2>
                            <h2>⭐ Back End</h2>
                            <h2>⭐ Blender</h2>
                        </div>
                        <div className="resume-language">
                            <h1>Language</h1>
                            <h2>⭐ Bhutanese</h2>
                            <h2>⭐ English</h2>
                        </div>
                    </div>
                    <div className="resume-right">
                        <Button
                            variant={'link'}
                            className='p-0 m-0 decoration-transparent'
                            onClick={toggleResume}
                        >
                            <h1>❌</h1>
                        </Button>
                        <div className="resume-desc">
                            <h1>Jigdrel Tshering Tobden</h1>
                            <h2>Freelancer</h2>
                            <p>sdfjb sdjkfb sdf sdfasdf sdkjfb</p>
                            <p>sdfjb sdjkfb sdf sdfasdf sdkjfb</p>
                        </div>
                        <div className="resume-experience">
                            <h1>Experience</h1>
                        </div>
                        <div className="resume-reference">
                            <h1>Reference</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Resume