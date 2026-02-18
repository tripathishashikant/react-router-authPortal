import { Outlet, useNavigate } from 'react-router'
import { removeUserToken } from '@/utils/auth'

function DashboardLayout() {
    const navigate = useNavigate()

    const handleLogout = () => {
        removeUserToken()
        navigate('/login')
    }

    return (
        <>
            <section className='dashboard-layout'>
                <aside className='side-nav'>
                    <h2>Side Nav</h2>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </aside>
                <main className='main-content'>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default DashboardLayout