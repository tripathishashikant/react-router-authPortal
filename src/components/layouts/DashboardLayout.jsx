import { Outlet } from 'react-router'

function DashboardLayout() {
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
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default DashboardLayout