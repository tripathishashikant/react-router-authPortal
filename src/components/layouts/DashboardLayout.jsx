import { Outlet, useNavigate } from 'react-router-dom'
import { removeUserToken } from '@/utils/auth'
import SideNav from '@/components/common/SideNav'

function DashboardLayout() {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeUserToken()
    navigate('/login')
  }
  
  return (
    <>
      <section className='dashboard-layout'>
        <SideNav />
        <main className='main-content'>
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
          <Outlet />
        </main>
      </section>
    </>
  )
}

export default DashboardLayout