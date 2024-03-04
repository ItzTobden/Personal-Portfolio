import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const TerminalApp = () => {
    return (
        <Button
            variant={'link'}
            className='bg-transparent p-0 m-0'
        ><Image
            src='/images/terminal_icon.png'
            alt='terminal icon'
            width={50}
            height={50}
        /></Button>
    )
}

export default TerminalApp