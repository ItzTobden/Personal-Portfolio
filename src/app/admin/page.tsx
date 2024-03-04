import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function AdminPage() {
    const { isAuthenticated } = getKindeServerSession()
    const isLoggedIn = await isAuthenticated()

    if (!isLoggedIn) {
        redirect('/auth')
    }

    return (
        <div>AdminPage</div>
    )
}

export default AdminPage