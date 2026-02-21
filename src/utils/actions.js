import { redirect } from 'react-router-dom'
import { setUserToken } from '@/utils/auth'

export async function loginAction({ request }) {
    const formData = await request.formData()
    const username = formData.get('username')
    const pass = formData.get('password')

    if (username === 'admin' && pass === '123') {
        setUserToken()

        return redirect('/dashboard')
    }

    return { error: 'Username and password combination incorrect.' }
}