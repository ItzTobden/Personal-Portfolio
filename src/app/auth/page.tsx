'use client'

import React from 'react'
import './auth.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AuthPage() {
    return (
        <div className='auth-container'>
            <div className="auth-desc-wrapper">
                <h1>Welcome Drukpas👋</h1>
                <p className='text-muted-foreground'>Enjoy your stay! 🫠</p>
                <p className='text-muted-foreground'>You can connect using one of the followings</p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true
                }}
                orientation='horizontal'
                className='auth-selection-wrapper'
            >
                <CarouselContent className='carousel-content'>
                    <CarouselItem className='carousel-item'>
                        <Button>
                            <Link href='/'>LogIn as a Guest😃</Link>
                        </Button>
                    </CarouselItem>
                    <CarouselItem className='carousel-item'>
                        <Button>
                            <Link href='/auth/signin'>User LogIn😁</Link>
                        </Button>
                    </CarouselItem>
                    <CarouselItem className='carousel-item'>
                        <Button>
                            <Link href='/auth/signin'>Admin LogIn🫡</Link>
                        </Button>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default AuthPage