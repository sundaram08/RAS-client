import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import MusicBar from './Components/Home/MusicBar'

const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
      <MusicBar/>
    </div>
  )
}

export default Layout
