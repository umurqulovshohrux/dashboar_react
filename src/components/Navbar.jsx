import { Avatar, Input } from "@material-tailwind/react";
import React from "react"
import { IoSearch } from "react-icons/io5";
import { Typography } from "@material-tailwind/react";



export default function Navbar() {
    return (
        <div className="p-4 shadow-sm-w-full flex justify-between ">
            <h1 className="text-xl font-bold ">Dashboard</h1>

            <div className="flex items-center gap-7 ">
                <div className="w-72 ">
                    <Input
                        className="!border-gray-500"
                        placeholder="Search here ... "
                        icon={<IoSearch />}
                        labelProps={

                            { className: "hidden " }
                        }
                    />


                   

                </div>

                <div className="flex items-center gap-4">
                    <Avatar
                        size="sm"
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                    />
                </div>



                <div>
                    <Typography variant="h6">Tania Andrew</Typography>
                    <Typography variant="small" color="gray" className="font-normal ">Top Level </Typography>
                </div>
            </div>

            {/* <div>
                <NatificationMenu/>
            </div> */}
        </div>
    )
}
