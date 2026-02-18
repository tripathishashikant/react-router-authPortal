import { redirect } from 'react-router'
import { isAuthenticated } from '@/utils/auth'

export const rootLoader = () => redirect('/dashboard')

export const dashboardPageLoader = () => {    
    if (!isAuthenticated()) return redirect('/login')

    return null
}

export const loginPageLoader = () => {
    if (isAuthenticated()) return redirect('/dashboard')

    return null
}