import { Outlet, useNavigation } from 'react-router-dom'
import Loader from '@/components/common/loader'

function RootLayout() {
  const navigate = useNavigation()
  const isNavigate = navigate.state === 'loading' || navigate.state === 'submitting'
  const year = new Date().getFullYear()

  return (
    <>
      <header><h1>React Router with Authentication</h1></header>
      { isNavigate ? <Loader /> : <Outlet /> }
      <footer><p>© copyright {year}</p></footer>
    </>
  )
}

export default RootLayout
