'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import './body.css'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable'

const Blender = () => {
    const [openBlender, setOpenBlender] = useState(false)
    const toggleBlender = () => {
        setOpenBlender(prevState => !prevState)
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
                onClick={toggleBlender}
            ><Image
                src='/svgs/Icons_folder.svg'
                alt='webdev icon'
                width={50}
                height={50}
            /><h1>Blender</h1></Button>

            { openBlender && (
                <div className="file-container"
                    style={{ top: position.y, left: position.x }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div className="file-header">
                        <h1>📂 Blender</h1>
                        <Button
                            variant={'link'}
                            className='decoration-transparent p-0 m-0'
                            onClick={toggleBlender}
                        >❌</Button>
                    </div>
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="file-wrapper"
                    >
                        <ResizablePanel defaultSize={30}>
                            <h1>hello</h1>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={70} className='file-files'>
                            <Button
                                variant={'link'}
                                className='bg-transparent p-0 m-0 flex flex-col decoration-transparent'
                            ><Image
                                src='/svgs/Icons_folder.svg'
                                alt='webdev icon'
                                width={50}
                                height={50}
                            /><h1>House Design</h1></Button>
                            <Button
                                variant={'link'}
                                className='bg-transparent p-0 m-0 flex flex-col decoration-transparent'
                            ><Image
                                src='/svgs/Icons_folder.svg'
                                alt='webdev icon'
                                width={50}
                                height={50}
                            /><h1>Character Design</h1></Button>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            )} 
        </>
    )
}

export default Blender