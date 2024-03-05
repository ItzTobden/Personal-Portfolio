'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import './body.css'
import { SkillsData } from '@/data/skills-data'

const Skills = () => {
    const [openSkills, setOpenSkills] = useState(false)
    const toggleSkills = () => {
        setOpenSkills(prevState => !prevState)
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
                onClick={toggleSkills}
            ><Image
                src='/svgs/analysis-skills.svg'
                alt='skills icon'
                width={50}
                height={50}
            /><h1>Skills</h1></Button>

            { openSkills && (
                <div className="skills-container"
                    style={{ top: position.y, left: position.x }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div className="skills-header">
                        <Button
                            variant={'link'}
                            className='bg-transparent decoration-transparent p-0 m-0'
                            onClick={toggleSkills}
                        >
                        <h1>❌</h1>
                        </Button>
                    </div>
                    <div className="personal-desc">
                        <h1>Name: Jigdrel Tshering Tobden</h1>
                        <h1>Job: Junior Web Developer</h1>
                        <h1>Country: Bhutan</h1>
                        <h1>Level: 50</h1>
                    </div>
                    <div className="stats-wrapper">
                        <h1>HP: 10185</h1>
                        <h1>MP: 1250</h1>
                    </div>
                    <div className="personal-stats">
                        <h1>Strength: 85</h1>
                        <h1>Vitality: 60</h1>
                        <h1>Agility: 90</h1>
                        <h1>Intelligence: 85</h1>
                        <h1>Sense: 70</h1>
                    </div>
                    <div className="skills-desc">
                        <h1>[Skills]</h1>
                        { SkillsData.map(item => (
                            <div className="skills-list" key={item.id}>
                                <h1>{item.name}</h1>
                                <div className="skills-bar">
                                    <div className="progress-bar" style={{ width: `${item.level}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Skills