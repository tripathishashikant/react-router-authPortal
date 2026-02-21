
import { NavLink } from 'react-router-dom'
import { routes } from '@/router'

function SideNav () {
    const { children: dashboardRoutes = [] } = routes[0]?.children.find((route) => route.id === 'dashboardLayout') || {}
    const filteredDashboardRoutes = dashboardRoutes.filter(route => route.id === 'dashboard' || route.id === 'posts-loader-route')

    return (
        <aside className='side-nav'>
          <h2>Side Nav</h2>
            {
              filteredDashboardRoutes.map((route) => {
                const path = route.index ? '.' : route.path
                const text = route.id === 'posts-loader-route' ? 'Posts' : (route.id.charAt(0).toUpperCase() + route.id.slice(1))

                return (
                  <NavLink
                    key={route.id}
                    to={path}
                    className={({ isActive }) => isActive ? 'hide' : ''}
                    end={route.index === true}
                  >
                    {text}
                  </NavLink>
                )
              })
            }
        </aside>
    )
}

export default SideNav