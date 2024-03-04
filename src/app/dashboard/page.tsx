import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

async function DashboardPage() {
    const { isAuthenticated } = getKindeServerSession()
    const isLoggedIn = await isAuthenticated()

    if (!isLoggedIn) {
        redirect('/auth')
    }

    return (
        <div>DashboardPage</div>
    )
}

export default DashboardPage