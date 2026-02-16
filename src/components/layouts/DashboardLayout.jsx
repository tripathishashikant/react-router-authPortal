import { Outlet } from 'react-router'

function DashboardLayout() {
    return (
        <>
            <section id='mainContent'>
                <aside>
                    <h2>Navigation</h2>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </aside>
                <main>
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default DashboardLayout