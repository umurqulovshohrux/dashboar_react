import {Button, Slider } from '@material-tailwind/react'
import React from 'react'
import LineChart from "./Charts/LineCharts"


export default function LineChartDiagram() {
  return (
    <div className="bg-white rounded-md p-4">
        <div className="flex items-center justify-between">
            <h3 className="font-semibold">Statistics</h3>
            <Button
            size="sm"
            className="bg-[fff1f8] shadow-sm text-red-400 font-light normal-case"
            >
                view all


            </Button>
        </div>

        <div className="mt-3 flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <div className="w-1/2">
                    <h1 className="text-sm">Total Art sold</h1>
                    <h3 className="font-semibold">145</h3>
                </div>
                <div>
                    <Slider
                    size="lg"
                    className="!w-[20px]"
                    barClassName="bg-[#d71203]"
                    defaultValue={20}
                    />

                </div>

            </div>
            <div className="flex gap-3 items-center">
                <div className="w-1/2">
                    <h1 className="text-sm">Total Earning</h1>
                    <h3 className="font-semibold">545 ETH</h3>
                </div>
                <div>
                    <Slider
                    size="lg"
                    className="!w-[50px]"
                    barClassName="bg-[#D712D3]"
                    defaultValue={50}
                    />

                </div>

            </div>
            <LineChart/>

        </div>
        
      
    </div>
  )
}

