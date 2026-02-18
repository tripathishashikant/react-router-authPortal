import { USER_TOKEN } from "../constant"

export const isAuthenticated = () => {
    const userToken = localStorage.getItem('userToken')

    return userToken && userToken === USER_TOKEN
}

export const setUserToken = () => localStorage.setItem('userToken', USER_TOKEN)

export const removeUserToken = () => localStorage.removeItem('userToken')
