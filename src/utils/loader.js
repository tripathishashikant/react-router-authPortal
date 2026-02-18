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

export const postsPageLoader = async () => {
    const res = await fetch('/posts.json')

    if (!res.ok) {
        throw new Error(`Could not fetch posts.json: ${res.status} ${res.statusText}`);
    }

    const posts = await res.json()

    return posts
}