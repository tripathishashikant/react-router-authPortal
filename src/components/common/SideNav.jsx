
import { NavLink } from 'react-router-dom'
import { routes } from '@/router'

function SideNav () {
    const { children: dashboardRoutes = [] } = routes[0]?.children.find((route) => route.name === 'dashboardLayout') || {}
    const filteredDashboardRoutes = dashboardRoutes.filter(route => route.name === 'dashboard' || route.name === 'posts')

    return (
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
    )
}

export default SideNav