import Sidebar from 'cdbreact/dist/components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className="App">
        <Sidebar/>
    </div>
    <div className='container'>
        <Outlet/>
    </div>
    </>
  )
}
