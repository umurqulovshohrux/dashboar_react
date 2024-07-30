import React from 'react'
import SwipperMainBar from '../components/SwipperMainBar'
import SwiperCards from '../components/SwiperCards'
import LineChartDiagram from '../components/LineChartDiagram'
import Card from '../components/Card'
import NotificationCards from '../components/NotificationCards'

export default function Dashboards() {
  return (
    <div className="bg-[#f8f8f8] min-h-[90vh] pt-8 pl-8 ">
    <div className="grid grid-cols-6 gap-8  ">
      <div className="col-span-4 flex flex-col gap-6">
        <div>
          <SwipperMainBar/>
        </div>

        <div>
          <SwiperCards/>
        </div>
        <div>
          <Card/>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-6">
        <div>
        <LineChartDiagram/>
        </div>
         
         <div>
         <NotificationCards/>
         </div>
       
      </div>
      
    </div>


    </div>
  )
}
