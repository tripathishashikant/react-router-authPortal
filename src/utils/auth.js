export const isAuthenticated = () => !!localStorage.getItem('userToken')

export const setUserToken = () => localStorage.setItem('userToken', 'abc-123-xyz')
