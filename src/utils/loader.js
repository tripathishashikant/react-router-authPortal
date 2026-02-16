import { redirect } from 'react-router'
import { isAuthenticated } from './auth'

export const rootLoader = () => redirect('/dashboard')

export const proctectedLoader = () => {    
    if (!isAuthenticated()) return redirect('/login')

    return null
}

export const authPageLoader = () => {
    if (isAuthenticated()) return redirect('/dashboard')

    return null
}