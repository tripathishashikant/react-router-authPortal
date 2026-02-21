import { Outlet, useNavigate, Link } from 'react-router-dom'
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
                        <li>
                            <Link to='posts'>Posts</Link>
                        </li>
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