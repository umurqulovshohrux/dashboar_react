import { Button } from '@material-tailwind/react'
import React from 'react'

export default function NotificationCards() {
  return (
    <div className="bg-white rounded-md p-4">
       
        <div className="flex items-center justify-between">
            <h3 className="font-semibold">Notification</h3>
            <Button
            size="sm"
            className="bg-[fff1f8] shadow-sm text-red-400 font-light normal-case"
            >
                view all


            </Button>
        </div>


       <div>
       <div className="flex  gap-2 mt-[30px] hover:shadow-xl hover:shadow-red-100 rounded-lg p-3 ">
            <div className="pt-2">
                <img src="/noticard1.png" alt="" />
            </div>
            <div  className=" flex flex-col gap-1" >
                <h1 className=" font-bold">Steve Jau Croc</h1>
                <p className=" font-thin text-gray-700">Has Been Sold 120 ETH</p>
                <div className=" flex   justify-between  gap-10 items-center">
                <span className="bg-pink-500 w-[50px] text-white p-1 rounded-[4px] ">Fda-1</span> 
                <p className=" "> 16 December 2021</p>

                </div>
            </div>
            <div className="mx-auto mt-3">
                <img src="/Group (2).png" alt="" />
            </div>
        </div>
        <div className="flex  gap-2 mt-[30px] hover:shadow-xl hover:shadow-red-100 rounded-lg  p-3">
            <div className="pt-2">
                <img src="/noticard2.png" alt="" />
            </div>
            <div  className=" flex flex-col gap-1" >
                <h1 className=" font-bold"></h1>
                <p className=" font-thin text-gray-700">Invited Crocs League society </p>
                <div className=" flex   justify-between  gap-10 items-center">
                 
                <p className="text-gray-700 ">      with a unique collectable NFT.</p>

                </div>
            </div>
            <div className="mx-auto mt-3">
                <img src="/Group (2).png" alt="" />
            </div>
        </div>
        <div className="flex  gap-2 mt-[30px] hover:shadow-xl hover:shadow-red-100 rounded-lg p-3 ">
            <div className="pt-2">
                <img src="/noticard3.png" alt="" />
            </div>
            <div  className=" flex flex-col gap-1" >
                <h1 className=" font-bold">Bee Keeper Croc</h1>
                <p className=" font-thin text-gray-700">Create in a new goal in the NFT Market place</p>
                <div className=" flex    gap-10 items-center pt-4">
                <span className="border-2 border-blue-500 border-solid   w-[50px] text-blue-600  rounded-[4px] ">GFT-#</span> 
                <p className=" "> 2d Ago</p>

                </div>
            </div>
            <div className="mx-auto mt-3 mr-6">
                <img src="/Group (2).png" alt="" />
            </div>
        </div>
        <div className="flex  gap-2 mt-[30px] hover:shadow-xl hover:shadow-red-100 rounded-lg  p-3">
            <div className="pt-2">
                <img src="/noticard4.png" alt="" />
            </div>
            <div  className=" flex flex-col gap-1" >
                <h1 className=" font-bold">Steve Jau Croc</h1>
                <p className=" font-thin text-gray-700">All crocs are not equal. <br />    Crocs League characters will have.</p>
               
            </div>
            <div className="mx-auto mt-3">
                <img src="/Group (2).png" alt="" />
            </div>
        </div>
       </div>
    </div>
  )
}
