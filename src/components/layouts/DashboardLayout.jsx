import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import { removeUserToken } from '@/utils/auth'
import { routes } from '@/router'

function DashboardLayout() {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeUserToken()
    navigate('/login')
  }
  const { children: dashboardRoutes = [] } = routes[0]?.children.find((route) => route.name === 'dashboardLayout') || {}
  const filteredDashboardRoutes = dashboardRoutes.filter(route => route.name === 'dashboard' || route.name === 'posts')

  return (
    <>
      <section className='dashboard-layout'>
        <aside className='side-nav'>
          <h2>Side Nav</h2>
            {
              filteredDashboardRoutes.map((route) => {
                const path = route.index ? '.' : route.path

                return (
                  <NavLink
                    key={route.name}
                    to={path}
                    className={({ isActive }) => isActive ? 'hide' : ''}
                    end={route.index === true}
                  >
                    {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                  </NavLink>
                )
              })
            }
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