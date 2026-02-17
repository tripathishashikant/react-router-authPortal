import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <>
      <header><h1>My App Header</h1></header>
      <Outlet />
      <footer><p>© copyright 2026</p></footer>
    </>
  )
}

export default RootLayout
