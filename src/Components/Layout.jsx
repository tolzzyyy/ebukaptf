import React from 'react'

import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'

const Layout = () => {
  return (
    <div>
      <TopNav/>
      <Outlet/>
    </div>
  )
}

export default Layout
