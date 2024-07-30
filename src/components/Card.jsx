import { Button } from '@material-tailwind/react'
import React from 'react'


export default function Card() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex  justify-between">
      <div>
        <h1 className="text-[20px] font-bold">Hot Bids </h1>

        </div>

        <div className=" flex gap-3">
          <Button className="bg-pink-600 ">All</Button>
          <Button className="border-2 border-gray-300 border-solid  bg-white text-black">Artwork</Button>
          <Button className=" border-2 border-gray-300 border-solid  bg-white text-black">Collectibles</Button>
          <Button className="border-2 border-gray-300 border-solid  bg-white text-black">Utlity</Button>
          
         </div>
      </div>
     <div className="flex gap-4">
     <div className="relative  ">
       <div className=" ">
       <img src="/cardjsx1.png" alt="" />
       </div>
        <div  className="absolute bottom-4 left-3 p-3  min-w-[200px]   text-white bg-white bg-opacity-20 rounded-lg shadow-lg shadow-black/10 backdrop-blur-md border border-white border-opacity-30">
            <h1 className="font-bold">Jose Delbo</h1>
            <p className="font-normal"> Creator name</p>
            <p className=" flex justify-between gap-8 font-bold ">600 ETH <span>End In 2h 30m</span></p>
            
        </div>
      </div>
      <div className="relative  ">
       <div className=" ">
       <img src="/cardjsx2.png" alt="" />
       </div>
        <div  className="absolute bottom-4 left-3 p-3  min-w-[200px] text-white bg-white bg-opacity-20 rounded-lg shadow-lg shadow-black/10 backdrop-blur-md border border-white border-opacity-30">
            <h1 className="font-bold">Mad Dog Jones</h1>
            <p className="font-normal"> Creator name</p>
            <p className=" flex justify-between gap-8 font-bold ">600 ETH <span>End In 2h 30m</span></p>
            
        </div>
      </div>
      <div className="relative  ">
       <div className=" ">
       <img src="/cardjsx3.png" alt="" />
       </div>
        <div  className="absolute bottom-4 left-3 p-3  min-w-[200px] text-white bg-white bg-opacity-20 rounded-lg shadow-lg shadow-black/10 backdrop-blur-md border border-white border-opacity-30">
            <h1 className="font-bold">Art name</h1>
            <p className="font-normal"> Creator name</p>
            <p className=" flex justify-between gap-8 font-bold ">600 ETH <span>End In 2h 30m</span></p>   
        </div>
      </div>
     </div>
    </div>
  )
}
