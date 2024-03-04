import React from 'react'
import './auth.css'

function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div className='auth-layout-container'>
            <div className="character-animation">
                Coming Soon
            </div>
            {children}
        </div>
    )
}

export default AuthLayout