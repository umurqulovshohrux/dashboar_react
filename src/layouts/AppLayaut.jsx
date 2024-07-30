import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteBar from '../components/SiteBar'
import Navbar  from '../components/Navbar'
export default function AppLayaut() {
    return (
        <div className="flex h-screen overflow-scroll">
            <SiteBar />
            <div className="w-full">
               <div>
               <Navbar />
               </div>
                <div className="h-[90vh] overflow-y-scroll ">
                <Outlet />
                </div>
            </div>
          
        </div>

    )
}
