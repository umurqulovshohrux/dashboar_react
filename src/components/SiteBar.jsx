import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Button,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

export default function SiteBar() {
    const { pathname } = useLocation();

    console.log(pathname)
    return (
        <Card className="h-screen   w-full max-w-[16rem] flex flex-col justify-between p-4 shadow-xl shadow-blue-gray-900/5">
            <div>
                <div className="flex justify-center items-center p-2 ">
                    <img className="with-2/3"  src="/logo.png" alt="" />
                   
                </div>
                <List className="relative top-6">
                    <Link to="/" >
                        <ListItem className={`${pathname == '/' ? '!bg-purple-500 !text-white' : ''}`} >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    <Link to="/store">
                        <ListItem className={`${pathname == '/store' ? '!bg-purple-500 !text-white' : ''}`} >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Store
                        </ListItem>
                    </Link>
                 
                    <Link to="/wallet">
                    <ListItem className={`${pathname == '/wallet' ? ' !bg-purple-500 !text-white':''}`}>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Wallet
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                    </Link>
                 
                  
                    <Link to='/activebids'>
                    <ListItem className={` ${ pathname == '/activebids' ?' !bg-purple-500 !text-white':''}`}> 
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Active Bids
                    </ListItem>
                    </Link>

              
                   <Link to='/history'>
                   <ListItem className={` ${pathname == '/history' ?' !bg-purple-500 !text-white':''}`}>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        History
                    </ListItem>

                   </Link>


                   
                  <Link to='/analytics'>
                  <ListItem className={` ${ pathname == '/analytics' ?' !bg-purple-500 !text-white':''}`}>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Analytics
                    </ListItem>
                  </Link>
                </List>

            </div>

            <div className="w-full mt-[24px] bg-gradient-to-b from-white p-3 to-[#8115e7] flex flex-col rounded-2xl text-center gap-4   justify-center">
                <div className="flex justify-center relative -top-16 ">
                    <img className="w-[115px]" src="/Group.png" alt="" />
                </div>
                <div className="relative -top-8 flex flex-col gap-5">
                    <h2 className="text-xl text-black">Upgrade Your Dashboard </h2>

                    <Button className="bg-deep-purple-500">Upgrade</Button>
                </div>

            </div>
        </Card>
    );
}