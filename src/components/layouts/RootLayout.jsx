import { Outlet, useNavigation } from 'react-router-dom'
import Loader from '@/components/common/loader'

function RootLayout() {
  const navigate = useNavigation()
  const isNavigate = navigate.state === 'loading' || navigate.state === 'submitting'

  return (
    <>
      <header><h1>My App Header</h1></header>
      { isNavigate ? <Loader /> : <Outlet /> }
      <footer><p>© copyright 2026</p></footer>
    </>
  )
}

export default RootLayout
