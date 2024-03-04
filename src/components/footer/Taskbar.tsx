import React from 'react'
import { Input } from '../ui/input'
import Github from './Github'
import StartMenu from './StartMenu'
import Folder from './Folder'
import TerminalApp from './Terminal'
import DateTimeApp from './DateTimeApp'
import './footer.css'

const Taskbar = () => {
    return (
        <div className="taskbar-container">
            <div className="taskbar-links">
                <StartMenu />
                <Input type='text' placeholder='Search...' /> 
                <Folder />
                <Github />
                <TerminalApp />
            </div>
            <div className="date-time">
                <DateTimeApp />
            </div>
        </div>
    )
}

export default Taskbar