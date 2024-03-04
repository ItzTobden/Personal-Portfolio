import React from 'react'
import './signin.css'
import { SigninForm } from '@/schema/form-schema'

function SigninPage() {
    return (
        <div className='signin-container'>
            <div className="signin-desc">
                <h1>Welcome Back Drukpas!🫠</h1>    
                <SigninForm />
            </div>
        </div>
    )
}

export default SigninPage