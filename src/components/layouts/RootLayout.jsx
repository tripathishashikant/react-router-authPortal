import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <>
      <header>My App Header</header>
      <Outlet />
      <footer>© copyright 2026</footer>
    </>
  )
}

export default RootLayout
