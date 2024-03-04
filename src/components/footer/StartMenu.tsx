import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  

const StartMenu = () => {
    return (
        <Drawer>
            <DrawerTrigger>
                <Button
                    variant={'link'}
                    className='bg-transparent p-0 m-0'
                ><Image
                    src='/svgs/menu-custom-1.svg'
                    alt='folder icon'
                    width={50}
                    height={50}
                /></Button>
            </DrawerTrigger>

            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default StartMenu